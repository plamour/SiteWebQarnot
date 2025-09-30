// Pour le carousel

const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showImage(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;

  carousel.style.transform = `translateX(${-index * 400}px)`;
}

prevBtn.addEventListener('click', () => showImage(index - 1));
nextBtn.addEventListener('click', () => showImage(index + 1));

// Auto défilement toutes les 3s
setInterval(() => {
  showImage(index + 1);
}, 3000);
