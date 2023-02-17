import './style.css';
import logo from './assets/images/logo-no-background.png';
import retrieve from './modules/retrieve.js';
import createDisplay from './modules/createDisplay.js';
import { shows, modal, overlay } from './modules/htmlElements.js';
import { urlShow, urlInvolvement } from './modules/url.js';
import openModal from './modules/displayModal.js';
import closeModal from './modules/closeModal.js';
import init from './modules/init.js';
import addLike from './modules/addLike.js';
import sendComment from './modules/sendComment.js';
import countLikes from './modules/countLikes.js';
import displayLikes from './modules/displayLikes.js';

const involvementId = 'B0W5zAB6ekRD2JmINXvy';
const myInvolvUrl = `${urlInvolvement}apps/${involvementId}/comments`;
const urlLikes = `${urlInvolvement}apps/${involvementId}/likes`;

const ids = Array.from({ length: 10 }, (_, i) => i + 1);

const response = retrieve(`${urlShow}shows`);
const retrievedLikes = retrieve(`${urlInvolvement}apps/${involvementId}/likes`);

window.addEventListener('load', () => {
  let nbOfLikes = 0;
  response.then((objs) => {
    objs.slice(0,10).forEach((obj) => {
      createDisplay(shows, obj)
      retrievedLikes.then((like) => {
        nbOfLikes = countLikes(like, obj.id);
        displayLikes({ element: shows, id: obj.id, nbOfLikes });
      });
    });
  });

  shows.addEventListener('click', (e) => {
    if (e.target.className === 'comment-btn') {
      init(modal);
      ids.forEach((id) => {
        if (Number(e.target.parentElement.parentElement.id) === id) {
          retrieve(`${urlShow}shows/${id}`).then((data) => openModal(modal, data, overlay));
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

  shows.addEventListener('click', (e) => {
    if (e.target.className === 'fa-regular fa-heart like') {
      let nbOfLikes;
      ids.forEach((id) => {
        if (Number(e.target.parentElement.id) === id) {
          addLike(urlLikes, id);
          retrievedLikes.then((obj) => {
            nbOfLikes = countLikes(obj, id);
            displayLikes({ element: shows, id, nbOfLikes });
          });
        }
      });
    }
  });

  modal.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.className === 'btn-sub') {
      const myTarget = e.target.parentElement.parentElement.parentElement.parentElement
        .classList[1];
      const formName = document.querySelector('.form-name');
      const comment = document.querySelector('.comment');
      ids.forEach((id) => {
        if (Number(myTarget) === id) {
          sendComment(myInvolvUrl, id, formName.value, comment.value);
        }
      });
    }
  });
});
