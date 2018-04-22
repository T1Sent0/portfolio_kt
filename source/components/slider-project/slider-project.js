import "./slider-project.scss"
import Slider from 'swiper'

let slider2 = new Slider('.project-slider', {
    initialSlide: 1,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    navigation: {
        nextEl: '.button-portfolio-next',
        prevEl: '.button-portfolio-prev',
    },
});