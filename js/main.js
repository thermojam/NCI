
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