
var form = document.getElementById('ajax-contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var http = new XMLHttpRequest(), f = this;

  http.open("POST", "contact.php");
  http.onreadystatechange = function() {
	  if (http.readyState == 4 && http.status == 200) {
	    alert(http.responseText);
	    form.reset();
	  }
	}
	http.onerror = function() {
  	alert('Ошибка, попробуйте еще раз');
	}
	http.send(new FormData(f));

});

