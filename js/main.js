"use strict";

//ORDER-CARS-INPUT-HIDDEN
$(document).ready(function () {
    $('.order-btn').click(function () {
        let title = $(this).data('title');
        $('#orderProduct').val(title);
        $('#orderModal').modal('show');
    });
});

// LOADER
window.addEventListener("load", function () {
    document.getElementById("loaderContainer").style.display = "none";
});

// VALIDATION and Masks
$('.mask').mask('+7 (999) 999 99 99');
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
    'modalCadillac_Escalade',
    'modalBMW_X7_xDrive40i_049',
    'modalVolvo_S90_T6_75', 'modalVolvo_XC90_T5_76',
    'modalBentley_Bentayga_79',
    'modalRange_Rover_86',
    'modalBMW_530i_xDrive_89', 'modalBMW_X5_xDrive40i_84', 'modalMercedes-Benz_E350_87',
    'modalMercedes-Benz_GLE_350_93', 'modalRange_Rover_94', 'modalMercedes-Benz_GLS_450_95',
    'modalRange_Rover_Sport_97', 'modalBMW_X6_xDrive40i_98', 'modalRange_Rover_Velar_99', 'modalAudi_Q8_55TFSI_1',
    'modalAudi_Q8_55TFSI_2', 'modalBMW_X7_xDrive40i_3', 'modalAudi_Q7_45_TFSI_4', 'modalBMW_X7_xDrive40i_6',
    'modalPorsche_Panamera_8', 'modalBMW_740i_xDrive_11',
    'modalLexus_GX_550_12', 'modalAudi_Q7_45TFSI_13', 'modalMercedes-Benz_GLC_300_14', 'modalMercedes-Benz_S500_15',
    'modalAudi_A6_allroad_16', 'modalBMW_X6_xDrive40i_17', 'modalRange_Rover_Sport_18', 'modalMercedes-Benz_GLS_450_19',
    'modalToyota_LC_250_20', 'modalBMW-X5-xDrive40i-21', 'modalMercedes-Benz-GLE-350-22', 'modalAudi-A8-Long-60TFSIe-23',
    'modalPorsche-Cayenne-24'];

// Инициализация обработчика для каждого модального окна
modalIDs.forEach(function (modalID) {
    $('#' + modalID).on('shown.bs.modal', function () {

        //CATALOG-SLIDER-3
        function initSwipers(containerSelector) {
            let containers = document.querySelectorAll(containerSelector);

            containers.forEach(function (container) {
                let mainSlider = new Swiper(container.querySelector('.main-slider'), {
                    spaceBetween: 10,
                    lazy: true,
                    grabCursor: true,
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
    let modalIds = [
        '#modalCadillac_Escalade',
        '#modalBMW_X7_xDrive40i_049',
        '#modalRange_Rover_57',
        '#modalVolvo_S90_T6_75', '#modalVolvo_XC90_T5_76',
        '#modalBentley_Bentayga_79',
        '#modalRange_Rover_86',
        '#modalBMW_530i_xDrive_89', '#modalBMW_X5_xDrive40i_84', '#modalMercedes-Benz_E350_87',
        '#modalMercedes-Benz_GLE_350_93', '#modalRange_Rover_94', '#modalMercedes-Benz_GLS_450_95',
        '#modalRange_Rover_Sport_97', '#modalBMW_X6_xDrive40i_98', '#modalRange_Rover_Velar_99', '#modalAudi_Q8_55TFSI_1',
        '#modalAudi_Q8_55TFSI_2', '#modalBMW_X7_xDrive40i_3', '#modalAudi_Q7_45_TFSI_4', '#modalBMW_X7_xDrive40i_6',
        '#modalPorsche_Panamera_8', '#modalBMW_740i_xDrive_11',
        '#modalLexus_GX_550_12', '#modalAudi_Q7_45TFSI_13', '#modalMercedes-Benz_GLC_300_14', '#modalMercedes-Benz_S500_15',
        '#modalAudi_A6_allroad_16', '#modalBMW_X6_xDrive40i_17', '#modalRange_Rover_Sport_18', '#modalMercedes-Benz_GLS_450_19',
        '#modalToyota_LC_250_20', '#modalBMW-X5-xDrive40i-21', '#modalMercedes-Benz-GLE-350-22', '#modalAudi-A8-Long-60TFSIe-23',
        '#modalPorsche-Cayenne-24'];

    // Перебор всех идентификаторов
    modalIds.forEach(function (modalId) {
        if (window.location.href.indexOf(modalId) !== -1) {
            $(modalId).modal('show');
        }
    });
});



