<?php 

	$link = mysqli_connect('11.80.0.23','host3107','aeSh8ail','host3107_brka');
	if($link == false)
	{
		echo 'ошибка в подключении к БД (' . mysqli_connect_errno() . '): ';
		exit();
	}

