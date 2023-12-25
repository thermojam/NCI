let swiper3 = new Swiper('.swiper3', {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let swiper4 = new Swiper('.swiper4', {
    spaceBetween: 10,
    allowTouchMove: false,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Связываем событие click на миниатюре со сменой слайда в основном слайдере
swiper3.on('click', function () {
    // Получаем индекс кликнутой миниатюры
    let clickedIndex = swiper3.clickedIndex;
    // Переключаем слайдер 4 на соответствующий индекс
    swiper4.slideTo(clickedIndex);
});