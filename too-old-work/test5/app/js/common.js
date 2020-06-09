// window.addEventListener('DOMContentLoaded', function() {



var form = document.querySelector('#myForm');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var formData = {
    phone: document.querySelector('input[name="phone"]').value
  };

  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    console.log(request.response);
    alert('Ваша заявка успешно отправлена!');
    form.innerHTML = '<h2>Спасибо за заявку!</h2>';
  });

  request.open('POST', '../send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('&phone=' + encodeURIComponent(formData.phone));
});







var SliderItem = document.querySelectorAll('.slider-item'),
    SliderDots = document.querySelector('.slider-dots'),
    Dot = document.querySelectorAll('.dot');

function hideSliderItem(a) {
    for (var i = a; i < SliderItem.length; i++) {
        SliderItem[i].classList.add('hiden');
    }
}
hideSliderItem(1);

function showSliderItem(b) {
    if (SliderItem[b].classList.contains('hiden')) {
        SliderItem[b].classList.remove('hiden');
    }
}
SliderDots.addEventListener('click', function(event) {
    var target = event.target;
    if(target && target.classList.contains('dot')) {
        for(var i = 0; i < Dot.length; i++) {
            Dot[i].classList.remove('dot-active');
            if(target == Dot[i]) {
                hideSliderItem(0);
                showSliderItem(i);
                Dot[i].classList.add('dot-active');
            }
        }
    }
});














var tab = document.querySelectorAll('.info-tab-item'),
    tab_p = document.querySelectorAll('.info-tab-item>p'),
    info = document.querySelector('.info-tab'), 
    tabContent = document.querySelectorAll('.info-tabcontent');

    
function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.add('hiden');
    }
}
hideTabContent(1);
function showTabContent(b) {
    if (tabContent[b].classList.contains('hiden')) {
        tabContent[b].classList.remove('hiden');
    }
}
info.addEventListener('click', function(event) {
  var target = event.target;
  if(target) {
    for(var i = 0; i < tab.length; i++) {
      if(target == tab[i] || target == tab_p[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
});












// });
