import './style.css';
/* eslint-disable no-unused-vars */
import logo from './assets/images/logo-no-background.png';
import retrieve from './modules/retrieve.js';
import createDisplay from './modules/createDisplay.js';
import {
  shows, modal, overlay, showMenu,
} from './modules/htmlElements.js';
import { urlShow, urlInvolvement } from './modules/url.js';
import openModal from './modules/displayModal.js';
import closeModal from './modules/closeModal.js';
import init from './modules/init.js';
import addLike from './modules/addLike.js';
import sendComment from './modules/sendComment.js';
import countLikes from './modules/countLikes.js';
import displayLikes from './modules/displayLikes.js';
import countItems from './modules/countItems.js';
import displayNbItem from './modules/displayNbItem.js';
import addComment from './modules/addComment.js';
import countComments from './modules/countComments.js';
import displayComments from './modules/displayComments.js';

const involvementId = 'B0W5zAB6ekRD2JmINXvy';
const myInvolvUrl = `${urlInvolvement}apps/${involvementId}/comments`;
const urlLikes = `${urlInvolvement}apps/${involvementId}/likes`;
const getCommentFromApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B0W5zAB6ekRD2JmINXvy/comments?item_id=';

let ids = 0;
const likes = {};
let nbItems = 0;

const response = retrieve(`${urlShow}shows`);
const retrievedLikes = retrieve(`${urlInvolvement}apps/${involvementId}/likes`);

window.addEventListener('load', () => {
  let nbOfLikes = 0;
  response.then((objs) => {
    objs.forEach((obj) => {
      createDisplay(shows, obj);
      retrievedLikes.then((like) => {
        nbOfLikes = countLikes(like, obj.id);
        likes[obj.id] = nbOfLikes;
        displayLikes({ element: shows, id: obj.id, nbOfLikes });
      });
    });
    nbItems = countItems(shows);
    ids = Array.from({ length: nbItems }, (_, i) => i + 1);
    init(showMenu);
    displayNbItem(showMenu, nbItems);
  });

  shows.addEventListener('click', (e) => {
    if (e.target.className === 'comment-btn') {
      init(modal);
      ids.forEach((id) => {
        if (Number(e.target.parentElement.parentElement.id) === id) {
          retrieve(`${urlShow}shows/${id}`).then((data) => openModal(modal, data, overlay));
          retrieve(`${getCommentFromApi}${id}`).then((comment) => {
            const listsOfComments = document.querySelector('.list-of-comments');
            displayComments(listsOfComments, comment);

            const noOfComment = document.querySelector('.no-of-comments');
            const returnedNoOfComments = countComments(listsOfComments);
            noOfComment.innerHTML = ` (${returnedNoOfComments})`;
          });
        }
      });
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target.className === 'close-modal') {
      closeModal(modal, overlay);
    }
  });

  overlay.addEventListener('click', () => {
    closeModal(modal, overlay);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(modal, overlay);
    }
  });

  // add a new like
  shows.addEventListener('click', (e) => {
    if (e.target.className === 'fa-regular fa-heart like') {
      let nbOfLikes = 0;
      ids.forEach((id) => {
        if (Number(e.target.parentElement.id) === id) {
          addLike(urlLikes, id);
          if (!likes[id]) {
            likes[id] = 0; // This fix the NaN error
          }
          nbOfLikes = likes[id] + 1;
          likes[id] = nbOfLikes;
          displayLikes({ element: shows, id, nbOfLikes });
        }
      });
    }
  });

  // add a new comment
  modal.addEventListener('click', (e) => {
    e.preventDefault();
    const today = new Date();
    const listOfComment = document.querySelector('.list-of-comments');
    if (e.target.className === 'btn-sub') {
      const myTarget = e.target.closest('.modal').classList[1];
      const formName = document.querySelector('.form-name');
      const comment = document.querySelector('.comment');
      ids.forEach((id) => {
        if (Number(myTarget) === id) {
          if (!(comment.value === '')) {
            if ((formName.value === '')) {
              formName.value = 'Anonymous'
            }
            sendComment(myInvolvUrl, id, formName.value, comment.value);
            addComment(listOfComment, {
              date: today.toLocaleDateString(),
              name: formName.value,
              comment: comment.value,
            });
          }
        }
      });
    }
  });
});
