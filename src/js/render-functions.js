import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function createGallery(images, galleryEl) {
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="card">
      <a href="${largeImageURL}" class="card-item-img">
        <img class="img" src="${webformatURL}" alt="${tags}">
      </a>
      <div class="card-description">
        <ul class="desc-item">
          <li class="desk-item-name">Likes</li>
          <li class="desk-item-value">${likes}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Views</li>
          <li class="desk-item-value">${views}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Comments</li>
          <li class="desk-item-value">${comments}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Downloads</li>
          <li class="desk-item-value">${downloads}</li>
        </ul>
      </div>
    </li>
  `).join("");

  galleryEl.insertAdjacentHTML('beforeend', markup);

  if(!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
  } else {
    lightbox.refresh();
  }
};

export function clearGallery(galleryEl) {
  galleryEl.innerHTML = "";
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}