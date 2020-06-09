<?php 
	$link = mysqli_connect('адрес бд','логин','пароль','имя бд');
	if(mysqli_connect_errno())
	{
		echo 'ошибка в подключении к БД (' . mysqli_connect_errno() . '): ';
		exit();
	}
