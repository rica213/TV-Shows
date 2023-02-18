const displayComments = (element, comments) => {
  let li;
  comments.forEach((comment) => {
    li = document.createElement('li');
    li.innerHTML = `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
    element.appendChild(li);
  });
};

export default displayComments;
