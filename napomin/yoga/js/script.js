// window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'), 
        tabContent = document.querySelectorAll('.info-tabcontent');

        
    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let SliderItem = document.querySelectorAll('.slider-item'),
        SliderDots = document.querySelector('.slider-dots'),
        Dot = document.querySelectorAll('.dot'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    function hideSliderItem(a) {
        for (let i = a; i < SliderItem.length; i++) {
            SliderItem[i].classList.add('hide');
        }
    }
    hideSliderItem(1);
    function showSliderItem(b) {
        if (SliderItem[b].classList.contains('hide')) {
            SliderItem[b].classList.remove('hide');
        }
    }
    SliderDots.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('dot')) {
            for(let i = 0; i < Dot.length; i++) {
                Dot[i].classList.remove('dot-active');
                if(target == Dot[i]) {
                    hideSliderItem(0);
                    showSliderItem(i);
                    Dot[i].classList.add('dot-active');
                }
            }
        }
    });
    prev.addEventListener('click', () => {
        for(let i = 0; i < Dot.length; i++) {
            if(Dot[i].classList.contains('dot-active')) {
                Dot[i].classList.remove('dot-active');
                let a = i;
                a--;
                if(i == 0) {
                    let a = Dot.length - 1;
                    hideSliderItem(0);
                    showSliderItem(a);
                    Dot[a].classList.add('dot-active');
                    break;
                }
                hideSliderItem(0);
                showSliderItem(a);
                Dot[a].classList.add('dot-active');
                break;
            }
        }
    });
    next.addEventListener('click', () => {
        for(let i = 0; i < Dot.length; i++) {
            if(Dot[i].classList.contains('dot-active')) {
                Dot[i].classList.remove('dot-active');
                let a = i;
                a++;
                if(i == Dot.length-1) {
                    hideSliderItem(0);
                    showSliderItem(0);
                    Dot[0].classList.add('dot-active');
                    break;
                }
                hideSliderItem(0);
                showSliderItem(a);
                Dot[a].classList.add('dot-active');
                break;
            }
        }
    });

    let dedlain = '2020-6-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            s = Math.floor((t/1000) % 60 ),
            m = Math.floor((t/1000/60) % 60),
            h = Math.floor(t/(1000*60*60));
        return {
            't' : t,
            'h' : h,
            'm' : m,
            's' : s
        };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.h;
            minutes.textContent = t.m;
            seconds.textContent = t.s;
            if (t.t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', dedlain);

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });


    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = ' ';
    });
// form



let message = {
	loading: 'Загрузка...',
	success: 'Спасибо! Скоро мы с вами свяжемся!',
	failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
		input = document.querySelector('input'),
		statusMessage = document.querySelector('div');

		statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
	event.preventDefault()
})





















    
// });