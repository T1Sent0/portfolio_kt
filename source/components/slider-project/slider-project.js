import "./slider-project.scss"
import Slider from 'swiper'

let slider2 = new Slider('.project-slider', {
    effect: 'coverflow',
    initialSlide: 1,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows : true,
    },
    navigation: {
        nextEl: '.project-next',
        prevEl: '.project-prev',
    },
});