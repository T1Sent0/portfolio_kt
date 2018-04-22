import './fidback.scss';
import Swiper from "swiper";

let fidback = new Swiper('.logo-company-slider', {
    initialSlide: 0,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoHeight: false,
    preventClicks: false,
});

$('.logo--bidva, .logo--russ-denta, .logo--luxer, .logo--barberi, .logo--greenoteka, .ipaar-logo').on('click', function(e) {
    if(e.target.className === 'grid-row logo--bidva') {
        $('.button-play').show();
        $('.container-video').html('<div class="button-play"><span>&#9658;</span></div><video id="video" src="./video/5050337.mp4"></video>');
    }
    if(e.target.className === 'grid-row logo--russ-denta') {
        $('.button-play').show();
        $('.container-video').html('<div class="button-play"><span>&#9658;</span></div><video id="video" src="./video/11748722.mp4"></video>');
    }
    if(e.target.className === 'grid-row logo--luxer') {
        $('.button-play').show();
        $('.container-video').html('<div class="button-play"><span>&#9658;</span></div><video id="video" src="./video/14075636.mp4"></video>');
    }
    if(e.target.className === 'grid-row logo--barberi') {
        $('.button-play').show();
        $('.container-video').html('<div class="button-play"><span>&#9658;</span></div><video id="video" src="./video/20445730.mp4"></video>');
    }
    if(e.target.className === 'grid-row logo--greenoteka') {
        $('.button-play').show();
        $('.container-video').html('<div class="button-play"><span>&#9658;</span></div><video id="video" src="./video/30194533.mp4"></video>');
    }
    if(e.target.className === 'grid-row ipaar-logo') {
        $('.button-play').show();
        $('.container-video').html('<div class="button-play"><span>&#9658;</span></div><video id="video" src="./video/31378849.mp4"></video>');
    }
});

$('.container-video').on('click', '.button-play, .button-play > span', function () {
    $('#video')[0].play();
    $('.button-play').hide();

    setInterval(function () {
        if($('#video')[0].paused) {
            $('.button-play').show();
        }
    }, 3000);
});