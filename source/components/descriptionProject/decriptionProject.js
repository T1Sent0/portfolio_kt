import './decriptionProject.scss'
import Swiper from 'swiper'

let descrProj = new Swiper('.descrProj', {
    initialSlide: 0,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoHeight: false,
    navigation: {
        nextEl: '.button-slider-descr-next',
        prevEl: '.button-slider-descr-prev',
    },
});