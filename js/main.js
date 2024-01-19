//CATALOG-SLIDER-1
let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    lazy: true,

    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
    },
});

//CATALOG-SLIDER-2
let swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    lazy: true,
    stopOnInteraction: false,
    autoplay: {
        delay: 5000,
    },

    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },

        300: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: ".swiper-pagination-catalog",
        dynamicBullets: true,
        clickable: true,
    },
});

// Связывание слайдеров через общую пагинацию
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;


//CATALOG-SLIDER-3
function initSwipers(containerSelector) {
    let containers = document.querySelectorAll(containerSelector);

    containers.forEach(function (container) {
        let mainSlider = new Swiper(container.querySelector('.main-slider'), {
            spaceBetween: 10,
            allowTouchMove: false,
            lazy: true,
            autoplay: {
                delay: 5000,
            },
        });

//CATALOG-SLIDER-4
        let thumbnailSlider = new Swiper(container.querySelector('.thumbnail-slider'), {
            slidesPerView: 5,
            spaceBetween: 10,
            lazy: true,
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


// REVIEW-SLIDER
let swiper5 = new Swiper("#swiper5", {
    slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    grabCursor: true,
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".swiper-pagination-review",
        dynamicBullets: true,
        clickable: true,
    },
});

//click slide links
document.querySelectorAll('#swiper5 .swiper-slide').forEach(slide => {
    const overlay = slide.querySelector('.overlay');
    const link = overlay.querySelector('a');

    overlay.addEventListener('click', () => {
        const url = link.getAttribute('href');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// SCREEN-SLIDER
let swiper6 = new Swiper("#swiper6", {
    slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    grabCursor: true,
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".swiper-pagination-screen",
        dynamicBullets: true,
        clickable: true,
    },
});

//Click Whats-up
function redirectToWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=79215939333', '_blank');
}
