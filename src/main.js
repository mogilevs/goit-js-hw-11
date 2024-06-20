import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import err from './img/err.png';
import httpRequest from './js/pixabay-api.js';
import createMarkup from './js/render-functions.js';

const key = '44447356-a60fa6f4c2d7f10e895940a18';
const form = document.querySelector('.form');
const list = document.querySelector('.list');

form.addEventListener('submit', searchHandler);

function searchHandler(evt) {
  list.innerHTML = '';
  const text = evt.target.elements.input.value;
  evt.preventDefault();
  if (text !== '') {
    form.insertAdjacentHTML('afterend', '<span class="loader"></span>');
    const loader = document.querySelector('.loader');
    httpRequest(key, text)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        const photos = data.hits;
        if (photos.length !== 0) {
          list.insertAdjacentHTML('beforeend', createMarkup(photos));
          const lightbox = new SimpleLightbox('.list a', {
            captions: true,
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
          });
          lightbox.refresh();
        } else {
          iziToast.show({
            class: 'toast',
            position: 'topRight',
            icon: 'icon',
            iconUrl: err,
            iconColor: 'white',
            messageColor: 'white',
            message: `Sorry, there are no images matching your search query. Please try again!`,
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => (loader.style.display = 'none'));
    form.reset();
  }
}
