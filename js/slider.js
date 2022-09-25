const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

/*     autoplay: {
        delay: 3000,
    }, */

    simulateTouch: false,
    loop: true,
});

const swiper2 = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

/*     autoplay: {
        delay: 3000,
    }, */

    simulateTouch: false,
    loop: true,
});