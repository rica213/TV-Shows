import './style.css';
import generateId from './modules/generateId.js';
import retrieveShow from './modules/retrieveShow.js';
import createDisplay from './modules/createDisplay.js';
import { shows, modal, overlay } from './modules/htmlElements.js';
import url from './modules/url.js';
import openModal from './modules/displayModal.js';
import closeModal from './modules/closeModal.js';
import init from './modules/init.js';

const ids = [];
window.addEventListener('load', () => {
  let id;
  for (let i = 0; i < 6; i += 1) {
    id = generateId(249);
    ids.push(id);
    retrieveShow(url, id).then((obj) => createDisplay(shows, obj));
  }
});

shows.addEventListener('click', (e) => {
  if (e.target.className === 'comment-btn') {
    init(modal);
    ids.forEach((id) => {
      if (Number(e.target.id) === id) {
        retrieveShow(url, id).then((data) => openModal(modal, data, overlay));
      }
    });
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.className === 'close-modal') {
    closeModal(modal, overlay);
  }
});

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
