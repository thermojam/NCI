function initSwipers(containerSelector) {
    let containers = document.querySelectorAll(containerSelector);

    containers.forEach(function (container) {
        let mainSlider = new Swiper(container.querySelector('.main-slider'), {
            spaceBetween: 10,
            allowTouchMove: false,
            autoplay: {
                delay: 4000,
            },
        });

        let thumbnailSlider = new Swiper(container.querySelector('.thumbnail-slider'), {
            slidesPerView: 5,
            spaceBetween: 10,
        });

        mainSlider.controller.control = thumbnailSlider;
        thumbnailSlider.controller.control = mainSlider;

        thumbnailSlider.on('click', function () {
            let clickedIndex = thumbnailSlider.clickedIndex;
            mainSlider.slideTo(clickedIndex);
        });
    });
}

initSwipers('.slider-container');