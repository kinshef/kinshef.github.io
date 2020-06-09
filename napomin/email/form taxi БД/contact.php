<?php
  $to = "z.kinshef@gmail.com";
  // $from = $_POST['nameFF'];
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $message = "\nОткуда: ".$_POST['wherefrom']."\nКуда: ".$_POST['whereto']."\nИмя: ".$_POST['name']."\nТелефона: ".$_POST['tel']."\nПримечание: ".$_POST['project']."\nКласс автомобиля: ".$_POST['klassAuto']."\nСтоимость: ".$_POST['stoimost']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];

  mail($to, $subject, $message);
  echo $_POST['name'].', Ваше сообщение отправлено, спасибо!';
?>
