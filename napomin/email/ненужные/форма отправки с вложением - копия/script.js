// document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){
//   var http = new XMLHttpRequest(), f = this;
//   var th = $(this);
//   evt.preventDefault();
//   http.open("POST", "contact.php", true);
//   http.onreadystatechange = function() {
//     if (http.readyState == 4 && http.status == 200) {
//       alert(http.responseText);
//       if (http.responseText.indexOf(f.nameFF.value) == 0) { //валидацыя, очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
//         th.trigger("reset");
//       }
//     }
//   }
//   http.onerror = function() {
//     alert('Ошибка, попробуйте еще раз');
//   }
//   http.send(new FormData(f));
// }, false);
 

let form = document.getElementById('ajax-contact-form');
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