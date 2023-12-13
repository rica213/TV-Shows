const displayListOfAllShows = (container, obj) => {
  const li = document.createElement('li');
  li.classList.add('show-modal');
  li.id = obj.id;
  li.innerHTML = `
                    <img src="${obj.image.medium}" alt="${obj.name}"/>
                  <p class="name">${obj.name}</p>
                  <i class="fa-regular fa-heart like"></i>
                  <span class="nb-likes"></span>
                  <div class="box">
                    <button type="button" class="comment-btn">Comment</button>
                  </div>`;
  container.appendChild(li);
};

export default displayListOfAllShows;
