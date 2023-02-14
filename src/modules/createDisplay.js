const createDisplay = (container, imgUrl, name) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="${imgUrl}" alt="${name}"/>
  <p class="name">${name}</p>
  <button type="button">Comment</button>
  <button type="reservation">Reservation</button>`;
  container.appendChild(li);
}

export default createDisplay;