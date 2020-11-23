document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.header-nav__item, .header-navDop__item').forEach((el) => {
        if(el.querySelector('.header-navDop')){
            el.classList.add('header-dopUl');
        }
    })
    document.querySelectorAll('.header-nav__item, .header-navDop__item').forEach((el) => {
        el.addEventListener('click', (el) => {
            // if(el.target.parentNode.classList.contains('active')){
                debugger
                console.log(el.target.parentNode)
            //     el.target.parentNode.classList.remove('active');
            // }else{
            //     el.target.parentNode.classList.add('active');
            // }
        })
    })
    
    document.querySelector('.header-btsMobile').addEventListener('click', () => {
        document.querySelector('.section-header').classList.toggle('active');
        document.body.classList.toggle('modal-open');
    })




});












