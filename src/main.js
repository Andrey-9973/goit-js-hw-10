import getImagesByQuery from './js/pixabay-api.js';
import renderFunctions from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const requestText = form.elements.input.value.trim();

  if (requestText === '') {
    return;
  }

  renderFunctions.clearGallery();
  renderFunctions.showLoader();

  getImagesByQuery(requestText)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      renderFunctions.createGallery(images);
    })
    .catch(error => {
      console.log(error);

      iziToast.error({
        message: 'Something went wrong. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      renderFunctions.hideLoader();
    });
});
