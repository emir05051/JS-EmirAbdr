window.addEventListener("load", () => {
    const slider = Slider.fromData([1, 2, 3, 4, 5, 6, 7], createSlide);

    const slider2 = Slider.fromData([9, 8, 7, 6, 5, 4, 3, 2, 1], createSlide);

    slider.appendTo(document.body.querySelector(".slider"));
    slider2.appendTo(document.body.querySelector(".slider"));

    document.querySelector(".button_left").addEventListener("click", () => {
        slider.prevSlide();
        slider2.prevSlide();
    });

    document.querySelector(".button_right").addEventListener("click", () => {
        slider.nextSlide();
        slider2.nextSlide();
    });

    window.addEventListener("keyup", (event) => {
        switch (event.code) {
            case "ArrowLeft":
                {
                    slider.prevSlide();
                    event.preventDefault();
                }
                break;
            case "ArrowRight":
                {
                    slider.nextSlide();
                    event.preventDefault();
                }
                break;
        }
        console.log(event);
    })
    slider.goToSlide(2);
});


const createSlide = (index) => {
    return $("div", {
            className: "slide__content",
            style: {
                width: randomInt(150, 350) + "px",
                height: randomInt(100, 250) + "px",
            }
        },
        index
    );
}