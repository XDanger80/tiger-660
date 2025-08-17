// script.js
// Este script carga dinámicamente las imágenes y vídeos en la galería y gestiona
// el comportamiento del lightbox. La lista `mediaFiles` debe actualizarse con
// los nombres de fichero reales una vez que se hayan copiado en la carpeta
// correspondiente.

// Definimos un array con los ficheros multimedia. Se actualizará más adelante.
const mediaFiles = [
  { type: 'img', src: 'images/1.jpg', alt: 'Vista frontal Tiger Sport 660' },
  { type: 'img', src: 'images/2.jpg', alt: 'Vista lateral izquierda' },
  { type: 'img', src: 'images/3.jpg', alt: 'Vista lateral derecha' },
  { type: 'img', src: 'images/4.jpg', alt: 'Vista trasera con parrilla' },
  { type: 'img', src: 'images/5.jpg', alt: 'Vista trasera detalle matrícula' }
  ,{ type: 'img', src: 'images/6.jpg', alt: 'Vista lateral completa izquierda' }
  ,{ type: 'img', src: 'images/7.jpg', alt: 'Vista lateral completa derecha' }
  ,{ type: 'img', src: 'images/8.jpg', alt: 'Vista con maletas laterales y top case' }
  ,{ type: 'img', src: 'images/9.jpg', alt: 'Vista con maletas laterales desde otro ángulo' }
  ,{ type: 'img', src: 'images/10.jpg', alt: 'Vista lateral con maletas y top case (perspectiva 2)' }
  ,{ type: 'img', src: 'images/11.jpg', alt: 'Vista trasera con maletas y top case' }
  ,{ type: 'img', src: 'images/12.jpg', alt: 'Caja Carpuride 702 Pro que se incluye' }
];

// Funcón para inicializar la galería al cargar la página
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  mediaFiles.forEach((item) => {
    if (item.type === 'img') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      img.addEventListener('click', () => openLightbox(item.src));
      grid.appendChild(img);
    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      grid.appendChild(video);
      }
  });
}

// Abre la imagen en un lightbox
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

// Cierra el lightbox cuando se hace clic fuera de la imagen o en la x
function closeLightbox(event) {
  const lightbox = document.getElementById('lightbox');
  if (
    event.target.id === 'lightbox' ||
    event.target.classList.contains('close')
  ) {
    lightbox.style.display = 'none';
  }
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initGallery);
