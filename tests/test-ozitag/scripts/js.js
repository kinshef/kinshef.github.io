document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.header-nav__item, .header-navDop__item').forEach((el) => {
        if(el.querySelector('.header-navDop')){
            el.classList.add('header-dopUl');
        }
    })

    document.querySelectorAll('.header-nav__item>a>i, .header-navDop__item>a>i').forEach((elem) => {
        elem.addEventListener('click', (el) => {
            el.preventDefault();
            let elLi = el.target.parentNode.parentNode;

            if(elLi.parentNode.querySelector('.header-dopUl.active') && elLi.parentNode.querySelector('.header-dopUl.active') !== elLi){
                elLi.parentNode.querySelector('.header-dopUl.active').classList.remove('active');
            }

            if(elLi.classList.contains('active')){
                elLi.classList.remove('active');
                elLi.querySelector('.header-navDop__item.active').forEach((el) => {
                    el.classList.remove('active');
                });
            }else{
                elLi.classList.add('active');
            }

        })
    })
    
    document.querySelector('.header-btsMobile').addEventListener('click', () => {
        document.querySelector('.section-header').classList.toggle('active');
        document.body.classList.toggle('modal-open');
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth < 992){

            document.querySelector('.section-header').classList.remove('active');
            document.body.classList.remove('modal-open');

            if(document.querySelectorAll('.header-nav__item.active, .header-navDop__item.active').length){
                document.querySelectorAll('.header-nav__item.active, .header-navDop__item.active').forEach((el) => {
                    el.classList.remove('active');
                })
            }

        }
    })

});












