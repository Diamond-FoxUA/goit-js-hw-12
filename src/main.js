import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreBtn, hideLoadMoreBtn } from './js/render-functions.js';

//

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//

const formEl = document.querySelector('.form');
const formInputEl = formEl.querySelector('input');
const formBtnEl = document.querySelector('.form-btn');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.more-btn');
const loaderEl = document.querySelector('.loader');


let page = 1;
let currentQuery = '';

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  currentQuery = formInputEl.value.trim();

  if (!currentQuery) {
    return;
  }

  page = 1;
  clearGallery(galleryEl);
  hideLoadMoreBtn(loadMoreBtn);
  showLoader(loaderEl);

  const { hits, totalHits } = await getImagesByQuery(currentQuery, page);
  hideLoader(loaderEl);

  if (hits.length === 0) {
    iziToast.error({
      message: 'some error',
      position: 'topRight'
    })
    return;
  }
    createGallery(hits, galleryEl);

  if (totalHits > hits.length) {
    showLoadMoreBtn(loadMoreBtn);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page ++;
  loadMoreBtn.disabled = true;
  hideLoadMoreBtn(loadMoreBtn);
  showLoader(loaderEl);

  const { hits, totalHits } = await getImagesByQuery(currentQuery, page);
  hideLoader(loaderEl);
  showLoadMoreBtn(loadMoreBtn);
  createGallery(hits, galleryEl);
  
  if (galleryEl.children.length >= totalHits) {
    hideLoadMoreBtn(loadMoreBtn);
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight'
    });
  }

  loadMoreBtn.disabled = false;
  smoothScroll();
})

function smoothScroll() {
  const { height: cardHeight } = galleryEl.firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}