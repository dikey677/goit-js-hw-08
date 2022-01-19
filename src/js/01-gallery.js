// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const divList = galleryItems.map(item => {
  const markup = `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" title="${item.description}"/></a></div>`;

  return markup;
});

const addItem = divList.join('');

gallery.insertAdjacentHTML('afterbegin', addItem);
console.log(gallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});
