// FORM-SEND
// document.getElementById('callForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     ym(96622140, 'reachGoal', 'form_sended');
// });
//
// document.getElementById('callForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     ym(96622140, 'reachGoal', 'form_sended');
// });
//
// document.getElementById('orderForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     ym(96622140, 'reachGoal', 'form_sended');
// });

// VALIDATION
// modal-call
document.getElementById('name_call').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});
document.getElementById('mobile_call').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

// order-modal
document.getElementById('name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});
document.getElementById('mobile_tel').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

// calculation
document.getElementById('user_name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});
document.getElementById('mobile_phone').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

// NAV-LINKS-SHOW
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        // Проверяем, является ли ширина окна меньше или равной 768px (предположим, что это ваш порог для мобильной версии)
        if (window.innerWidth <= 992) {
            const navbarToggler = document.querySelector('.navbar-toggler');

            // Проверяем, свернуто ли меню
            if (!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click(); // Симулируем клик по кнопке "бургер"
            }
        }
    });
});

//CATALOG-SLIDER-1
let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        992: {
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
    // lazy: true,
    stopOnInteraction: false,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        992: {
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Связывание слайдеров через общую пагинацию
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;


// PRELOAD MODAL SLIDERS
let modalIDs = [
    'modalMercedes-Benz_AMG_GT43', 'modalMercedes-Benz_S500_4M',
    'modalBMW_740d_xDrive-M_Sport', 'modalMercedes-Benz_GLE_300d',
    'modalMercedes-Benz_E220d_Coupe', 'modalAudi_A8_60_TFSIe',
    'modalAudi_Q7_55_TFSIe_S-LINE', 'modalPorsche_Cayenne_grey',
    'modalBMW_750d_xDrive', 'modalBMW_X6_x_Drive40i',
    'modalPorsche_Panamera_4', 'modalVolvo_XC40_B4', 'modalVolvo_S90',
    'modalRange_Rover_Sport', 'modalPorsche_Cayenne_black', 'modalBMW_840i_xDrive', 'Range_Rover_Velar',
    'modalJeep_Wrangler', 'modalMercedes-Benz_GLE_Black', 'modalBMW_X5_xDrive40i_2024', 'modalCadillac_Escalade'];

// Инициализация обработчика для каждого модального окна
modalIDs.forEach(function (modalID) {
    $('#' + modalID).on('shown.bs.modal', function () {

        //CATALOG-SLIDER-3
        function initSwipers(containerSelector) {
            let containers = document.querySelectorAll(containerSelector);

            containers.forEach(function (container) {
                let mainSlider = new Swiper(container.querySelector('.main-slider'), {
                    spaceBetween: 10,
                    allowTouchMove: false,
                    lazy: true,
                    speed: 1000,
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

        console.log('Модальное окно с ID ' + modalID + ' отображено.');
    });
});

// REVIEW-SLIDER
let swiper5 = new Swiper("#swiper5", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
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

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
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

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//Modal URL !!!
$(document).ready(function () {
    // Список идентификаторов модальных окон
    let modalIds = [
        '#modalMercedes-Benz_AMG_GT43', '#modalMercedes-Benz_S500_4M',
        '#modalBMW_740d_xDrive-M_Sport', '#modalMercedes-Benz_GLE_300d',
        '#modalMercedes-Benz_E220d_Coupe', '#modalAudi_A8_60_TFSIe',
        '#modalAudi_Q7_55_TFSIe_S-LINE', '#modalPorsche_Cayenne_grey',
        '#modalBMW_750d_xDrive', '#modalBMW_X6_x_Drive40i', '#modalPorsche_Panamera_4',
        '#modalVolvo_XC40_B4', '#modalVolvo_S90',
        '#modalRange_Rover_Sport', '#modalPorsche_Cayenne_black', '#modalBMW_840i_xDrive', '#modalRange_Rover_Velar',
        '#modalJeep_Wrangler', '#modalMercedes-Benz_GLE_Black', '#modalBMW_X5_xDrive40i_2024', '#modalCadillac_Escalade'];

    // Перебор всех идентификаторов
    modalIds.forEach(function (modalId) {
        // Проверка, есть ли текущий идентификатор в URL
        if (window.location.href.indexOf(modalId) !== -1) {
            // Отображение модального окна
            $(modalId).modal('show');
        }
    });
});

