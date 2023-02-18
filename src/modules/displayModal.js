const openModal = (modal, data, overlay) => {
  modal.classList.remove('hidden');
  modal.classList.add(data.id);
  const html = document.createElement('div');
  html.innerHTML = ` <button class="close-modal">&times;</button>
                        <div class="data-img"><img src="${data.image.medium}" alt="${data.name}"/></div>
                        <p class="show-name name-style">${data.name}</p>
                        <p class="show-name">Language: ${data.language}</p>
                        <p class="show-name">Premiered: ${data.premiered}</p>
                        <div>
                          <h4 class="show-name name-style">Comment<span class="no-of-comments"><span></h4>
                          <ul class="list-of-comments">
                            
                          </ul>
                        </div>
                        <div class="form-section">
                        <h2>Add a Comment</h2>
                        <form action="#" id="form-ele">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Your Name"
                            class="form-name"
                            required
                          />
                          <textarea
                            name=""
                            id=""
                            placeholder="Your Insight"
                            class="comment"
                            required
                          ></textarea>
                          <button class="btn-sub" type="submit">Submit</button>
                        </form>
                      </div>`;
  modal.appendChild(html);
  overlay.classList.remove('hidden');
};

export default openModal;
