const displayLikes = ({ element, id, nbOfLikes }) => {
  const child = Array.from(element.children).find((item) => Number(item.id) === id);
  if (child) {
    child.querySelector('span.nb-likes').innerHTML = `${nbOfLikes} Likes`;
  }
};

export default displayLikes;