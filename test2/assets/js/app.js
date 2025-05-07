/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 600,
    pagination: {
      el: '.swiper__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 1.2
      },
      1200: {
        slidesPerView: 1.65
      }
    }
  });
  function setupToggle(triggerSelector, targetSelector, closeSelector) {
    var target = document.querySelector(targetSelector);
    var trigger = document.querySelector(triggerSelector);
    var closeBtn = document.querySelector(closeSelector);
    var toggle = function toggle() {
      return target.classList.toggle('open');
    };
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest(targetSelector) && !e.target.closest(triggerSelector)) {
        target.classList.remove('open');
      }
    });
  }
  setupToggle('#btn_basket', '#basket', '#basket__close');
  setupToggle('#btn_menu', '#header-naw', '#header-naw__close');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px 150px 0px',
    threshold: 0
  });
  document.querySelectorAll('#games__image, #friends-right').forEach(function (el) {
    return observer.observe(el);
  });
  document.querySelectorAll('.questions-tab__title').forEach(function (title) {
    title.addEventListener('click', function () {
      var tab = title.parentElement;
      // Если хочешь, чтобы только один был открыт — раскомментируй
      // document.querySelectorAll('.questions-tab').forEach(item => {
      //   if (item !== tab) item.classList.remove('active');
      // });
      tab.classList.toggle('active');
    });
  });
  var modal = document.getElementById('modal');
  var openBtns = document.querySelectorAll('.modal__singUp');
  var closeBtn = document.querySelector('.modal__close');
  openBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('active');
    });
  });
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  document.querySelectorAll('.sab-title').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      item.parentElement.classList.toggle('open');
    });
  });
});
/******/ })()
;