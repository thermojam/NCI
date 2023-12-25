//slider-catalog
let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
});

// Инициализация Swiper 2
let swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 4000,
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



//slider-modal
// let swiper3 = new Swiper(".mySwiper3", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     allowTouchMove: false,
//     autoplay: {
//         delay: 2000,
//     },
// });
//
// let swiper4 = new Swiper(".mySwiper4", {
//     loop: true,
//     spaceBetween: 10,
//     // autoplay: {
//     //     delay: 5000,
//     // },
// });


//click whats-up
function redirectToWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=79215939333', '_blank');
}


