import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('ul.gallery');

galleryToList(galleryItems);

ulEl.addEventListener('click', onImageClick);



function onImageClick(evn) {
    
    if (evn.target.nodeName !== 'IMG') {
        return;
    };
    evn.preventDefault();
    const instance = basicLightbox.create(`<img src="${evn.target.dataset.source}" width="800" height="600">`);
    
    instance.show(); 
    
};

function galleryToList(gallery) {
    ulEl.innerHTML = gallery
        .map(({ preview, original, description }) => `
            <li class = "gallery__item">
                <a class = "gallery__link" href = "${original}">
                    <img class = "gallery__image" src = "${preview}" alt = "${description}" data-source = "${original}">
                </a>
            </li>
            `)
        .join("");
 
}

