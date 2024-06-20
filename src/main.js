import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import err from './img/err.png';

const form = document.querySelector('.form');
const list = document.querySelector('.list');
form.addEventListener('submit', searchHandler);
const key = '44447356-a60fa6f4c2d7f10e895940a18';

function searchHandler(evt) {
  list.innerHTML = '';
  const text = evt.target.elements.input.value;
  evt.preventDefault();
  if (text !== '') {
    fetch(
      `https://pixabay.com/api/?key=${key}&q=${text}&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        const photos = data.hits;
        if (photos.length !== 0) {
          const markup = photos
            .map(
              ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
              }) => {
                return `<li class="item">
          <a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${likes}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${views}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${comments}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${downloads}</p>
            </li>
          </ul>
        </li>`;
              }
            )
            .join('');

          list.insertAdjacentHTML('beforeend', markup);
          const lightbox = new SimpleLightbox('.list a', {
	captions: true,
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250
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
      });
    form.reset();
  }
}


