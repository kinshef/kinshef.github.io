
var SliderItem = document.querySelectorAll('.slider-item'),
    SliderDots = document.querySelector('.slider-dots'),
    Dot = document.querySelectorAll('.dot'),
    btnprev = document.querySelector('.prev'),
    btnnext = document.querySelector('.next'),
    SliderWrap = document.querySelector('.slider>.wrap');

function hideSliderItem(a) {
    for (var i = a; i < SliderItem.length; i++) {
        SliderItem[i].classList.add('hiden');
        SliderItem[i].classList.remove('active');
        Dot[i].classList.remove('active');
    }
}
hideSliderItem(1);
function showSliderItem(b) {
    if (SliderItem[b].classList.contains('hiden')) {
        SliderItem[b].classList.remove('hiden');
        SliderItem[b].classList.add('active');
        Dot[b].classList.add('active');
    }
}
SliderDots.addEventListener('click', function(event) {
    if(event.target && event.target.classList.contains('dot')) {
        for(var i = 0; i < Dot.length; i++) {
            Dot[i].classList.remove('active');
            if(event.target == Dot[i]) {
                hideSliderItem(0);
                showSliderItem(i);
                Dot[i].classList.add('active');
            }
        }
    }
});


function sliderPrev() {
    for(var i = 0; i < SliderItem.length; i++) {
        if(SliderItem[i].classList.contains('active')) {
            SliderItem[i].classList.remove('active');
            var a = i;
            a--;
            if(i == 0) {
                var a = SliderItem.length - 1;
                hideSliderItem(0);
                showSliderItem(a);
                SliderItem[a].classList.add('active');
                break;
            }
            hideSliderItem(0);
            showSliderItem(a);
            SliderItem[a].classList.add('active');
            break;
        }
    }
}
btnprev.addEventListener('click', function() {
    sliderPrev();
});



function sliderNext() {
    for(var i = 0; i < SliderItem.length; i++) {
        if(SliderItem[i].classList.contains('active')) {
            SliderItem[i].classList.remove('active');
            var a = i;
            a++;
            if(i == SliderItem.length-1) {
                hideSliderItem(0);
                showSliderItem(0);
                SliderItem[0].classList.add('active');
                break;
            }
            hideSliderItem(0);
            showSliderItem(a);
            SliderItem[a].classList.add('active');
            break;
        }
    }
}
btnnext.addEventListener('click', function(){
    sliderNext();
});




SliderWrap.onmousedown = function(event) {
    var a = event.clientX;
    if(event.target && event.target.classList.contains('slider-item')) {
        SliderWrap.onmousemove = function(event) {

        }
        SliderWrap.onmouseup = function(event){
            if(event.target && event.target.classList.contains('slider-item')) {
                if(event.button == 0) {
                    if (event.clientX > 40+a ){
                        sliderPrev();
                    }
                    if (event.clientX < a-40 ) {
                        sliderNext();
                    }
                }
            }
        }
    }
    return false
}
