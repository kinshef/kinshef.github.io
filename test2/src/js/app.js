document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.05,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        speed: 600,
        pagination: {
          el: '.swiper__pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper__next',
          prevEl: '.swiper__prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 1.2,
          },
          1200: {
            slidesPerView: 1.65,
          }
        }
    });

    function setupToggle(triggerSelector, targetSelector, closeSelector) {
        const target = document.querySelector(targetSelector);
        const trigger = document.querySelector(triggerSelector);
        const closeBtn = document.querySelector(closeSelector);
      
        const toggle = () => target.classList.toggle('open');
      
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          toggle();
        });
      
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggle();
        });
      
        document.addEventListener('click', (e) => {
          if (!e.target.closest(targetSelector) && !e.target.closest(triggerSelector)) {
            target.classList.remove('open');
          }
        });
    }
    setupToggle('#btn_basket', '#basket', '#basket__close');
    setupToggle('#btn_menu', '#header-naw', '#header-naw__close');



    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
        }
    });
    }, {
    rootMargin: '0px 0px 150px 0px',
    threshold: 0
    });
    document.querySelectorAll('#games__image, #friends-right').forEach(el => observer.observe(el));




    document.querySelectorAll('.questions-tab__title').forEach(title => {
        title.addEventListener('click', () => {
            const tab = title.parentElement;
            // Если хочешь, чтобы только один был открыт — раскомментируй
            // document.querySelectorAll('.questions-tab').forEach(item => {
            //   if (item !== tab) item.classList.remove('active');
            // });
            tab.classList.toggle('active');
        });
    });


    const modal = document.getElementById('modal');
    const openBtns = document.querySelectorAll('.modal__singUp');
    const closeBtn = document.querySelector('.modal__close');
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });



    
    document.querySelectorAll('.sab-title').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            item.parentElement.classList.toggle('open');
        });
    });

});