import './style.css';
import generateId from './modules/generateId.js';
import retrieve from './modules/retrieve.js';
import createDisplay from './modules/createDisplay.js';
import { shows, modal, overlay } from './modules/htmlElements.js';
import { urlShow, urlInvolvement } from './modules/url.js';
import openModal from './modules/displayModal.js';
import closeModal from './modules/closeModal.js';
import init from './modules/init.js';
import addLike from './modules/addLike.js';
import getLikes from './modules/getLikes.js';
import sendComment from './modules/sendComment.js';
import countLikes from './modules/countLikes.js';
import displayLikes from './modules/displayLikes.js';

const involvementId = 'B0W5zAB6ekRD2JmINXvy';
const myInvolvUrl = `${urlInvolvement}apps/${involvementId}/comments`;

const ids = new Set();
let id;
for (let i = 0; i < 6; i += 1) {
  id = generateId(10);
  ids.add(id);
}

window.addEventListener('load', () => {
  let nbOfLikes = 0;
  ids.forEach((id) => {
    retrieve(`${urlShow}shows/${id}`).then((obj) => createDisplay(shows, obj));
    getLikes(`${urlInvolvement}apps/${involvementId}/likes`).then((obj) => {
      nbOfLikes = countLikes(obj, id);
      displayLikes({ element: shows, id: id, nbOfLikes: nbOfLikes });
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
        addLike(`${urlInvolvement}apps/${involvementId}/likes`, id);
        getLikes(`${urlInvolvement}apps/${involvementId}/likes`).then((obj) => {
          nbOfLikes = countLikes(obj, id);
          displayLikes({ element: shows, id: id, nbOfLikes: nbOfLikes });
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
