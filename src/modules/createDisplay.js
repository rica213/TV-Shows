const createDisplay = (container, obj) => {
  const li = document.createElement('li');
  li.classList.add('show-modal');
  li.innerHTML = `
                    <img src="${obj.image.medium}" alt="${obj.name}"/>
                  <p class="name">${obj.name}</p>
                  <i class="fa-regular fa-heart like"></i>
                  <span class="nb-likes"></span>
                  <div class="box">
                    <button type="button" class="comment-btn" id="${obj.id}">Comment</button>
                    <button type="button" class="comment-rev">Reservation</button>
                  </div>`;
  container.appendChild(li);
};

export default createDisplay;
