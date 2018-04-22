import './license.scss';
import Swiper from "swiper";

let swiper = new Swiper('.slider-license', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 5,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 70,
        modifier: 2,
        slideShadows : false,
    }
});