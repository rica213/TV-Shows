/**
 * @jest-environment jsdom
 */
import countItems from '../modules/countItems.js';

test('count items', () => {
  document.body.innerHTML = `<ul class="shows">
                              <li class="show-modal" id="1">
                                <img src="" alt="dummy_image_one"/>
                                <p class="name">dummy paragraph one</p>
                                <i class="fa-regular fa-heart like"></i>
                                <span class="nb-likes">5 Likes</span>
                                <div class="box">
                                  <button type="button" class="comment-btn">Comment</button>
                                  <button type="button" class="comment-rev">Reservation</button>
                                </div>
                                <li class="show-modal" id="2">
                                <img src="" alt="dummy_image_two"/>
                                <p class="name">dummy paragraph two</p>
                                <i class="fa-regular fa-heart like"></i>
                                <span class="nb-likes">2 Likes</span>
                                <div class="box">
                                  <button type="button" class="comment-btn">Comment</button>
                                  <button type="button" class="comment-rev">Reservation</button>
                                </div>
                                <li class="show-modal" id="3">
                                <img src="" alt="dummy_image_three"/>
                                <p class="name">dummy paragraph three</p>
                                <i class="fa-regular fa-heart like"></i>
                                <span class="nb-likes">100 Likes</span>
                                <div class="box">
                                  <button type="button" class="comment-btn">Comment</button>
                                  <button type="button" class="comment-rev">Reservation</button>
                                </div>
                            </ul>`;
  const shows = document.querySelector('.shows');
  const nbItems = countItems(shows);
  expect(nbItems).toBe(3);
});