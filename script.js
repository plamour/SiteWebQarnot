document.querySelectorAll(".carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    const buttonHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <button class="carousel-arrow prev">&#8249;</button>
        <button class="carousel-arrow next">&#8250;</button>
        <div class="carousel-text"></div>
        <div class="carousel-nav">
            ${buttonHtml.join("")}
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel-button");
    const prevArrow = carousel.querySelector(".carousel-arrow.prev");
    const nextArrow = carousel.querySelector(".carousel-arrow.next");
    const textDisplay = carousel.querySelector(".carousel-text");

    function updateCarousel() {
        const itemWidth = 640; // 600px width + 40px marge
        const containerWidth = 800;
        const offset = (containerWidth - itemWidth) / 2;
        const translateX = -currentIndex * itemWidth + offset;
        
        track.style.transform = `translateX(${translateX}px)`;
        
        items.forEach((item, index) => {
            item.classList.remove("active");
        });
        items[currentIndex].classList.add("active");
        
        buttons.forEach(btn => btn.classList.remove("carousel-button-active"));
        if (buttons[currentIndex]) {
            buttons[currentIndex].classList.add("carousel-button-active");
        }
        
        const currentText = items[currentIndex].getAttribute("data-text");
        if (currentText) {
            textDisplay.textContent = currentText;
            textDisplay.classList.add("show");
        } else {
            textDisplay.classList.remove("show");
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            goToSlide(i);
        });
    });

    nextArrow.addEventListener("click", nextSlide);
    prevArrow.addEventListener("click", prevSlide);

    updateCarousel();

    console.log("Carousel initialized with", items.length, "slides");
});

// JavaScript fais en suivant un tutoriel