const openModal = (modal, data, overlay) => {
  modal.classList.remove('hidden');
  const html = document.createElement('div');
  html.innerHTML = ` <button class="close-modal">&times;</button>
                        <div class="data-img"><img src="${data.image.medium}" alt="${data.name}"/></div>
                        <p class="show-name name-style">${data.name}</p>
                        <p class="show-name">Language: ${data.language}</p>
                        <p class="show-name">Premiered: ${data.premiered}</p>`;
  modal.appendChild(html);
  overlay.classList.remove('hidden');
};

export default openModal;
