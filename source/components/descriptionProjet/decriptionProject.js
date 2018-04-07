import './decriptionProject.scss'
import Swiper from 'swiper'

let descrProj = new Swiper('.descrProj', {
    initialSlide: 0,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button-slider-descr-ntxt',
        prevEl: '.button-slider-descr-prev',
    },
});