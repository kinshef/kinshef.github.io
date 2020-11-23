document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.header-nav__item, .header-navDop').forEach((el) => {
        if(el.querySelector('.header-navDop')){
            el.classList.add('header-dopUl');
        }
    })
    document.querySelector('.header-btsMobile').addEventListener('click', () => {
        document.querySelector('.section-header').classList.toggle('active');
        document.body.classList.toggle('modal-open');
    })




});












