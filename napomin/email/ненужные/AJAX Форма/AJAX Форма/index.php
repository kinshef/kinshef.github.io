<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <link rel="stylesheet" href="styles.css"> -->
  <title>Document</title>
</head>
<body>

<form class="my-form" id="myForm" method="post" action="send.php">
  <p>
    Ваше имя:
    <input type="text" placeholder="Ваше имя" name="name" required>
  </p>
  <p>
    Ваш email:
    <input type="text" placeholder="Ваше email" name="email" required>
  </p>
  <button type="submit">Отправить</button>
</form>

<script src="scripts.js"></script>
</body>
</html>