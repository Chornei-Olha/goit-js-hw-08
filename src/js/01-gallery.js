import { galleryItems } from './gallery-items';

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const cartMarkup = createPicture(galleryItems);

function createPicture(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
              />
        </a>
     </div>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', cartMarkup);

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.7,
  captionsData: 'alt',
  captionDelay: 250,
  maxZoom: 5,
  doubleTapZoom: 5,
});
