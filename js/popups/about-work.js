const popup = $('.popup-about-work');
const openPopup = $('.swiper-lookBtn');
const closePopup = $('.popup-about-work__close');

openPopup.click(() => popup.addClass('active'));

closePopup.click(() => popup.removeClass('active'));