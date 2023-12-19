//slider-catalog
let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination-catalog",
        dynamicBullets: true,
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

// Инициализация Swiper 2
let swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
});

// Связывание слайдеров через общую пагинацию
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;

//slider-modal
let swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper4 = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
    },
});


//click whats-up
function redirectToWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=79215939333', '_blank');
}


