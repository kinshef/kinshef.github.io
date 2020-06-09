// window.addEventListener('DOMContentLoaded', function() {



// });




var SliderItem = document.querySelectorAll('.slider-item'),
    SliderDots = document.querySelector('.slider-dots'),
    Dot = document.querySelectorAll('.dot'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

function hideSliderItem(a) {
    for (var i = a; i < SliderItem.length; i++) {
        SliderItem[i].classList.add('hiden');
        SliderItem[i].classList.remove('active');
    }
}
hideSliderItem(1);
function showSliderItem(b) {
    if (SliderItem[b].classList.contains('hiden')) {
        SliderItem[b].classList.remove('hiden');
        SliderItem[b].classList.add('active');
    }
}
SliderDots.addEventListener('click', function(event) {
    var target = event.target;
    if(target && target.classList.contains('dot')) {
        for(var i = 0; i < Dot.length; i++) {
            Dot[i].classList.remove('active');
            if(target == Dot[i]) {
                hideSliderItem(0);
                showSliderItem(i);
                Dot[i].classList.add('active');
            }
        }
    }
});
    prev.addEventListener('click', function() {
        for(var i = 0; i < Dot.length; i++) {
            if(Dot[i].classList.contains('active')) {
                Dot[i].classList.remove('active');
                var a = i;
                a--;
                if(i == 0) {
                    var a = Dot.length - 1;
                    hideSliderItem(0);
                    showSliderItem(a);
                    Dot[a].classList.add('active');
                    break;
                }
                hideSliderItem(0);
                showSliderItem(a);
                Dot[a].classList.add('active');
                break;
            }
        }
    });
    next.addEventListener('click', function() {
        for(var i = 0; i < Dot.length; i++) {
            if(Dot[i].classList.contains('active')) {
                Dot[i].classList.remove('active');
                var a = i;
                a++;
                if(i == Dot.length-1) {
                    hideSliderItem(0);
                    showSliderItem(0);
                    Dot[0].classList.add('active');
                    break;
                }
                hideSliderItem(0);
                showSliderItem(a);
                Dot[a].classList.add('active');
                break;
            }
        }
    });















