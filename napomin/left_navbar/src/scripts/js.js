$(function () {

    $('.slider-mine__img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-mine__text',
        arrows: true,
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    $('.slider-mine__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-mine__img',
        arrows: false,
        dots: true,
    });

});
document.addEventListener("DOMContentLoaded", function () {

    try {
        var leftInset = function () {
            var prScroll = window.pageYOffset - (document.querySelector('.section-mine').offsetHeight - document.querySelector('.header-content').offsetWidth);
            if(prScroll>0 && prScroll<document.querySelector('.section-mine').offsetHeight){
                document.querySelector('.header-content__items').style.clipPath = 'inset(0 0 0 '+prScroll+'px)';
            }
        }
        setTimeout(leftInset,0);
        window.addEventListener("scroll", leftInset);
    } catch (e) {
        console.error(e);
    }

    try {
        var mainNav = document.querySelector('.section-header');
        document.onscroll = function () {
            if(window.pageYOffset >= 100){
                mainNav.classList.add('fixHead');
            } else {
                mainNav.classList.remove('fixHead');
            }
        };
    } catch (error) {
        console.error(error)
      }

});












