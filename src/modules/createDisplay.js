const createDisplay = (container, obj) => {
  const li = document.createElement('li');
  li.innerHTML = `<div class = "show-modal" >
                    <img src="${obj.image.medium}" alt="${obj.name}"/>
                  </div>
                  <p class="name">${obj.name}</p>
                  <i class="fa-regular fa-heart like"></i>
                  <span class="nb-likes"></span>
                  <div class="box">
                    <i class="fa-regular fa-heart like"></i><br/>
  <button type="button" class="comment-btn" id="${obj.id}">Comment</button>
                    <button type="button" class="comment-rev">Reservation</button>
                  </div>`;
  container.appendChild(li);
};

export default createDisplay;
