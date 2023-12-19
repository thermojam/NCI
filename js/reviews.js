// slider-reviews
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 60,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
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
        200: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

//click slide links
// document.querySelectorAll('.swiper-slide').forEach(slide => {
//     const overlay = slide.querySelector('.overlay');
//     const link = overlay.querySelector('a');
//
//     overlay.addEventListener('click', () => {
//         const url = link.getAttribute('href');
//         if (url) {
//             window.open(url, '_blank');
//         }
//     });
// });

