const displayComments = (element, comments) => {
  let li;
  console.log(comments);
  //   console.log(element);
  comments.forEach((comment) => {
    li = document.createElement('li');
    li.innerHTML = `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
    element.appendChild(li);
  });
  console.log(element);
};

export default displayComments;
