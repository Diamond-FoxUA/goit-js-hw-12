import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

//

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//

const formEl = document.querySelector('.form');
const formInputEl = formEl.querySelector('input');
const formBtnEl = document.querySelector('.form-btn');

const galleryEl = document.querySelector('.gallery');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  formBtnEl.disabled = true;
  
  const userSearch = formInputEl.value.trim();
  if(!userSearch) return;

  clearGallery(galleryEl);
  showLoader();

  getImagesByQuery(userSearch.toLowerCase())
    .then(images => {
      if(!images.hits || images.hits.length === 0) {
        hideLoader();
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight"
        })
        formBtnEl.disabled = false;
        return;
      }
      createGallery(images.hits, galleryEl);
      hideLoader();
      formBtnEl.disabled = false;
    })
    .catch(error => {
      console.log(error);
    })

  formEl.reset();
}