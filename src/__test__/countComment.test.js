/**
 * @jest-environment jsdom
 */
import countComments from '../modules/countComments.js';

test('count items', () => {
  document.body.innerHTML = `<ul class="list-of-comments">
                                <p>12/03/2021 Kenny: Cool movie</p>
                                <p>12/05/2023 Kenny: Cool show</p>
                                <p>12/03/2021 Kenny: Good show</p>
                                <p>1/08/2022 Kenny: Must watch movie</p>
                            </ul>`;
  const myListOfComments = document.querySelector('.list-of-comments');
  const nbOfComments = countComments(myListOfComments);
  expect(nbOfComments).toBe(4);
});
