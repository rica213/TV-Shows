import './style.css';
import generateId from './modules/generateId.js';
import retrieve from './modules/retrieve.js';
import createDisplay from './modules/createDisplay.js';
import { shows, modal, overlay, likeBtn } from './modules/htmlElements.js';
import { urlShow, urlInvolvement } from './modules/url.js';
import openModal from './modules/displayModal.js';
import closeModal from './modules/closeModal.js';
import init from './modules/init.js';
import addLike from './modules/addLike.js';
import getLikes from './modules/getLikes.js';
import sendComment from './modules/sendComment.js';

const involvementId = 'B0W5zAB6ekRD2JmINXvy';
const myInvolvUrl = `${urlInvolvement}apps/${involvementId}/comments`;

const ids = new Set();
window.addEventListener('load', () => {
  let id;
  for (let i = 0; i < 6; i += 1) {
    id = generateId(10);
    ids.add(id);
    retrieve(`${urlShow}shows/${id}`).then((obj) => createDisplay(shows, obj));
  }
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
    ids.forEach((id) => {
      if (Number(e.target.parentElement.id) === id) {
        addLike(`${urlInvolvement}apps/B0W5zAB6ekRD2JmINXvy/likes`, id);
        console.log(getLikes(`${urlInvolvement}apps/B0W5zAB6ekRD2JmINXvy/likes`).then((obj) => {
          console.log(obj.find(liked => liked.item_id === id).likes);
        }));

        console.log(shows.children)
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
