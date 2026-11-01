import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>

          <div class="gallery-info">
            <div class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-value">${image.likes}</p>
            </div>

            <div class="info-item">
              <p class="info-title">Views</p>
              <p class="info-value">${image.views}</p>
            </div>

            <div class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-value">${image.comments}</p>
            </div>

            <div class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-value">${image.downloads}</p>
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  gallery.innerHTML = markup;

  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

export default {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
};
