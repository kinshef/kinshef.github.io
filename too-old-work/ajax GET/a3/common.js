window.addEventListener('DOMContentLoaded', function() {
let button = document.getElementById('button'),
	responses = document.getElementById('response');

let	requst = new XMLHttpRequest();
requst.open('GET', 'http://www.randomtext.me/api/lorem/ul-3/20-30', false);
requst.send();
let randomtextme = JSON.parse(requst.response);
responses.innerHTML = randomtextme.text_out;




button.addEventListener('click', function(){
	requst = new XMLHttpRequest();
	requst.open('GET', 'http://www.randomtext.me/api/lorem/ul-3/20-30', false);
	requst.send();
	randomtextme = JSON.parse(requst.response);
	responses.innerHTML = randomtextme.text_out;

});

});