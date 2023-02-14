const createDisplay = (container, obj) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="${obj.image.medium}" alt="${obj.name}"/>
  <p class="name">${obj.name}</p>
  <button type="button">Comment</button>
  <button type="button">Reservation</button>`;
  container.appendChild(li);
};

export default createDisplay;