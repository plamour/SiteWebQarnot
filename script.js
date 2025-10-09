document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item")
    const buttonHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
            ${buttonHtml.join("")}
        </div>
        `);

        const buttons = carousel.querySelectorAll(".carousel-button");

        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                // Remove active classes from all items and buttons
                items.forEach(item => item.classList.remove("carousel-item-active"));
                buttons.forEach(btn => btn.classList.remove("carousel-button-active"));
                
                // Add active classes to the clicked button and corresponding item
                items[i].classList.add("carousel-item-active");
                button.classList.add("carousel-button-active");
            });
        });

        // Set first button as active by default
        if (buttons.length > 0) {
            buttons[0].classList.add("carousel-button-active");
        }

    console.log("Carousel initialized with", buttons.length, "buttons");
});