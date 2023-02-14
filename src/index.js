import './style.css';
import generateId from './modules/generateId.js';
import retrieveShow from './modules/retrieveShow.js';
import createDisplay from './modules/createDisplay.js';
import { shows } from './modules/htmlElements.js';
import url from './modules/url.js';


window.addEventListener('load', (e) => {
  let id;
  for(let i = 0; i < 6; i++) {
    id = generateId(249);
    retrieveShow(url,id).then((obj) => createDisplay(shows, obj));
  }
});
