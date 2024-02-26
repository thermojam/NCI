function scrollFix() {
    if (window.innerWidth >= 1921 && window.innerWidth <= 2560) {

        window.scrollTo({
            top: 1250,
            behavior: 'smooth'
        });
    }

    if (window.innerWidth >= 1400 && window.innerWidth <= 1920) {
        window.scrollTo({
            top: 1240,
            behavior: 'smooth'
        });
    }

    if (window.innerWidth >= 1100 && window.innerWidth <= 1399) {

        window.scrollTo({
            top: 1680,
            behavior: 'smooth'
        });
    }

    if (window.innerWidth >= 992 && window.innerWidth <= 1099) {

        window.scrollTo({
            top: 1800,
            behavior: 'smooth'
        });
    }


    if (window.innerWidth >= 768 && window.innerWidth <= 991){

        window.scrollTo({
            top: 1900,
            behavior: 'smooth'
        });

    }

    if (window.innerWidth >= 576 && window.innerWidth <= 767){

        window.scrollTo({
            top: 3150,
            behavior: 'smooth'
        });

    }

    if (window.innerWidth >= 424 && window.innerWidth <= 575){

        window.scrollTo({
            top: 2900,
            behavior: 'smooth'
        });
    }

    if (window.innerWidth >= 320 && window.innerWidth <= 423){

        window.scrollTo({
            top: 2600,
            behavior: 'smooth'
        });
    }

}



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
    // lazy: true,

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
let modalIDs = ['modalBMW_520d', 'modalBMW_330_G20', 'modalBMW_X6_x_drive40i_M_Sport',
    'modalMercedes-Benz_AMG_GT43', 'modalMercedes-Benz_V250d', 'modalBMW_X4_M40i_xDrive', 'modalMercedes-Benz_S500_4M',
    'modalMERCEDES-BENZ_GLE_COUPE', 'modalBMW_740d_xDrive-M_Sport', 'modalLand_Rover_Defender', 'modalMercedes-Benz_GLE_300d',
    'modalAudi_A6_All_road_45_TDI', 'modalMercedes-Benz_AMG_GT_43_4M', 'modalMercedes-Benz_E220d_Coupe', 'modalAudi_A8_60_TFSIe',
    'modalBMW_X5_xDrive45e_black', 'modalBMW_X3_xDrive_20i', 'modalAudi_Q7_55_TFSIe_S-LINE', 'modalPorsche_Cayenne_grey', 'modalVolkswagen_Tuareg',
    'modalMercedes-Benz_GLE_350d', 'modalMercedes-Benz_E300e_4Matic', 'modalBMW_530d_xDrive_grey', 'modalBMW_320i_xDrive', 'modalMercedes-Benz_S350d_4MATIC',
    'modalBMW_X6_M50d_black', 'modalVolkswagen_Tuareg_black', 'modalBMW_750d_xDrive', 'modalBMW_X7_x_Drive40i', 'modalBMW_X6_x_Drive40i', 'modalVolvo_XC90_B6_Plus',
    'modalPorsche_Panamera_4', 'modalVolvo_XC40_B4', 'modalVolvo_S90', 'modalLexus_LX_570', 'modalLexus_RX_350', 'modalLexus_LX', 'modalRange_Rover_black',
    'modalRange_Rover_Sport', 'modalLexus_NX', 'modalPorsche_Cayenne_black', 'modalBMW_840i_xDrive', 'modalRR_Velar', 'modalAudi_Q8_55TFSI', 'modalMercedes-Benz_GLS_450'];

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
    let modalIds = ['#modalBMW_520d', '#modalBMW_330_G20', '#modalBMW_X6_x_drive40i_M_Sport',
        '#modalMercedes-Benz_AMG_GT43', '#modalMercedes-Benz_V250d', '#modalBMW_X4_M40i_xDrive', '#modalMercedes-Benz_S500_4M',
        '#modalMERCEDES-BENZ_GLE_COUPE', '#modalBMW_740d_xDrive-M_Sport', '#modalLand_Rover_Defender', '#modalMercedes-Benz_GLE_300d',
        '#modalAudi_A6_All_road_45_TDI', '#modalMercedes-Benz_AMG_GT_43_4M', '#modalMercedes-Benz_E220d_Coupe', '#modalAudi_A8_60_TFSIe',
        '#modalBMW_X5_xDrive45e_black', '#modalBMW_X3_xDrive_20i', '#modalAudi_Q7_55_TFSIe_S-LINE', '#modalPorsche_Cayenne_grey', '#modalVolkswagen_Tuareg',
        '#modalMercedes-Benz_GLE_350d', '#modalMercedes-Benz_E300e_4Matic', '#modalBMW_530d_xDrive_grey', '#modalBMW_320i_xDrive', '#modalMercedes-Benz_S350d_4MATIC',
        '#modalBMW_X6_M50d_black', '#modalVolkswagen_Tuareg_black', '#modalBMW_750d_xDrive', '#modalBMW_X7_x_Drive40i', '#modalBMW_X6_x_Drive40i', '#modalPorsche_Panamera_4',
        '#modalVolvo_XC90_B6_Plus', '#modalVolvo_XC40_B4', '#modalVolvo_S90', '#modalLexus_LX_570', '#modalLexus_RX_350', '#modalLexus_LX', '#modalRange_Rover_black',
        '#modalRange_Rover_Sport', '#modalLexus_NX', '#modalPorsche_Cayenne_black', '#modalBMW_840i_xDrive', '#modalRR_Velar', '#modalAudi_Q8_55TFSI', '#modalMercedes-Benz_GLS_450'];

    // Перебор всех идентификаторов
    modalIds.forEach(function (modalId) {
        // Проверка, есть ли текущий идентификатор в URL
        if (window.location.href.indexOf(modalId) !== -1) {
            // Отображение модального окна
            $(modalId).modal('show');
        }
    });
});

