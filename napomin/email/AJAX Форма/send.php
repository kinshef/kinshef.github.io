<?php

$phone = $_POST['phone'];

$to = ""; // куда отправить письмо
$subject ='Отправлена заявка с сайта НАЗВАНИЕ_САЙТА';
$headers = "From: $phone" . "\r\n";

if (mail($to,$subject,$headers)) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}

