var stoimost = document.querySelector('.stoimost'),
    cars = document.querySelector('#cars'),
    DOCars = document.querySelectorAll('#cars option'),
    DOCars2 = document.querySelectorAll('#cars2 option'),
    cars2 = document.querySelector('.cars2'),
    dcars2 = document.querySelector('#cars2'),
    dle_taxis_from_dist,
    dle_taxis_to_dist,
    dle_taxis_to_dist1,
    dle_taxis_to_dist2,
    dle_taxis_dist,
    dle_taxis_price;

function to_taxi(){
  for(var i = 0; i < DOCars.length; i++) {
    if(this.value == DOCars[i].value){
      dle_taxis_from_dist = DOCars[i].dataset.dist;
      dle_taxis_to_dist = eval('dle_taxis_to_' +  dle_taxis_from_dist);
      itog_where_go();
    }
  }
}

cars.addEventListener('change', to_taxi);


function from_taxi(){
  for(var i = 0; i < DOCars2.length; i++) {
    if(this.value == DOCars2[i].value){
      if(dle_taxis_from_dist != undefined){
        dle_taxis_to_dist = DOCars2[i].dataset[dle_taxis_from_dist];
        dle_taxis_to_dist1 = DOCars2[i].dataset.dist1;
        dle_taxis_to_dist2 = DOCars2[i].dataset.dist2;
        itog_where_go();
      }else{
        dle_taxis_to_dist1 = DOCars2[i].dataset.dist1;
        dle_taxis_to_dist2 = DOCars2[i].dataset.dist2;
      }
    }
  }
}

cars2.addEventListener('input', from_taxi);

function itog_where_go(){
  if( dle_taxis_from_dist != undefined && dle_taxis_to_dist != undefined){
    dle_taxis_dist = dle_taxis_to_dist;
    itog_stoimost()
  }
}


var klassAuto = document.querySelector('#klassAuto'),
    klassAutoOpt = document.querySelectorAll('#klassAuto option'),
    inp_stoimost = document.querySelector('.inp_stoimost'),
    itog_klassAuto;

klassAuto.addEventListener('change', function(){
  for(var i = 0; i < klassAutoOpt.length; i++) {
    if(this.value == klassAutoOpt[i].value){
      itog_klassAuto = klassAutoOpt[i].dataset.cost;
      itog_stoimost();
    }
  }
});





function itog_stoimost(){
  if(dle_taxis_to_dist != undefined && itog_klassAuto != undefined ){
    dle_taxis_price = dle_taxis_dist * itog_klassAuto;
    stoimost.textContent = dle_taxis_price.toFixed(1);
    inp_stoimost.value = dle_taxis_price.toFixed(1) + ' руб';
  }
}






















var form = document.getElementById('ajax-contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var http = new XMLHttpRequest(), f = this;

    http.open("POST", "contact.php");
    http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
      inp_stoimost.value = 0 + ' руб';
      stoimost.textContent = 0;
      form.reset();
    }
  }
  http.onerror = function() {
    alert('Ошибка, попробуйте еще раз');
  }
  http.send(new FormData(f));
}, false);