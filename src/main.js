import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreBtn, hideLoadMoreBtn } from './js/render-functions.js';

//

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//

const formEl = document.querySelector('.form');
const formInputEl = formEl.querySelector('input');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.more-btn');
const loaderEl = document.querySelector('.loader');


let page = 1;
let currentQuery = '';
let totalHits = 0;

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  currentQuery = formInputEl.value.trim();

  if (!currentQuery) {
    showToastError("Please fill out the search field.");
    return;
  }

  page = 1;
  clearGallery(galleryEl);
  hideLoadMoreBtn(loadMoreBtn);
  showLoader(loaderEl);

  try {
    const { hits, totalHits: hitsCount } = await getImagesByQuery(currentQuery, page);
    totalHits = hitsCount;

    if (!hits.length) {
      showToastError("Sorry, no images found. Please try a different search query.");
      return;
    }

    createGallery(hits, galleryEl);
    updateLoadMoreVisibility(galleryEl, totalHits, loadMoreBtn);

  } catch (error) {
    showToastError("Something went wrong. Please try again later.");
    console.error(error);
  } finally {
    hideLoader(loaderEl);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page++;
  loadMoreBtn.disabled = true;

  hideLoadMoreBtn(loadMoreBtn);
  showLoader(loaderEl);

  try {
    const { hits, totalHits } = await getImagesByQuery(currentQuery, page);

    createGallery(hits, galleryEl);
    smoothScroll();

    updateLoadMoreVisibility(galleryEl, totalHits, loadMoreBtn);

  } catch (error) {
    showToastError("Something went wrong. Please try again later.");
    console.log(error);
  } finally {
    hideLoader(loaderEl);
    loadMoreBtn.disabled = false;
  }
});

function smoothScroll() {
  const { height: cardHeight } = galleryEl.firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

function showToastError(message) {
  iziToast.error({
    message,
    position: 'topRight'
  });
}

function updateLoadMoreVisibility(galleryEl, totalHits, loadMoreBtn) {
  if (galleryEl.children.length >= totalHits) {
    hideLoadMoreBtn(loadMoreBtn);
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: "topRight"
    });
  } else {
    showLoadMoreBtn(loadMoreBtn);
  }
}