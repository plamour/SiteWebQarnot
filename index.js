const images = document.querySelectorAll('.child-img'); // the different img
const section = document.querySelector('.parent'); // The section
images[0].classList.add('active'); // show first image

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    let index = Math.floor(((scrollY - sectionTop)*1.3) / (sectionHeight / 4)); // we divide were we are in the section by 4 so we can get 3image for 3 text (NOT RESPONSIVE)

    if (index < 0) index = 0;
    if (index >= images.length) index = images.length - 1;

    // set the corresponding image to active
    images.forEach((img, i) => img.classList.toggle('active', i === index));
});