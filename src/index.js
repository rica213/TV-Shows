import './style.css';
import generateId from './modules/generateId.js';
import retrieve from './modules/retrieve.js';
import createDisplay from './modules/createDisplay.js';
import { shows, modal, overlay } from './modules/htmlElements.js';
import { urlShow } from './modules/url.js';
import openModal from './modules/displayModal.js';
import closeModal from './modules/closeModal.js';
import init from './modules/init.js';

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
      if (Number(e.target.id) === id) {
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
