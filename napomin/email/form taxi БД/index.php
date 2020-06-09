
<?php
  require "db.php";
  mysqli_set_charset($link, 'utf8');
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Отправка письма с вложением</title>
  <link rel="stylesheet" href="stail.css">
</head>

<body>
<div class="wpar">
  <h4>Быстрый заказ автомобиля</h4>
  <form id="ajax-contact-form" method="post">

    <div class="form-group form-group-select">
      <select name="wherefrom" id="cars" required>
        <option value selected disabled hidden>Откуда?</option>
        <option data-dist='dist1' value="Аэропорт">Аэропорт</option>
        <option data-dist='dist2' value="Минск">Минск</option>
      </select>
    </div>

    <div class="form-group">
      <?php $result = mysqli_query($link, "SELECT * FROM `dle_taxis_dist`"); ?>
      <input pattern='<?php while( ($cat1 = mysqli_fetch_assoc($result)) ){ echo str_replace(array( '(', ')' ), '', $cat1["rus_name"]) . "|" . mb_strtolower(str_replace(array( '(', ')' ), '', $cat1["rus_name"])) . "|";}?>' placeholder="Куда?" type="text" list="cars2" name="whereto" class="cars2" required/>
      <datalist id="cars2">
        <?php $result = mysqli_query($link, "SELECT * FROM `dle_taxis_dist`"); ?>
        <?php while( ($cat2 = mysqli_fetch_assoc($result)) ){
          echo '<option value="' . str_replace(array( '(', ')' ), '', $cat2["rus_name"]) . '" data-dist1=' . $cat2["dist1"] . ' data-dist2=' . $cat2["dist2"] . '>';
          echo '<option selected disabled hidden value="' . mb_strtolower(str_replace(array( '(', ')' ), '', $cat2["rus_name"])) . '" data-dist1=' . $cat2["dist1"] . ' data-dist2=' . $cat2["dist2"] . '>';
        }?>
      </datalist>
    </div>

    <div class="form-group">
      <input placeholder="Ваше имя" id="name" name="name" type="text" required>
    </div>
    <div class="form-group">
      <input placeholder="Ваш телефона" id="tel" name="tel" type="tel" required>
    </div>
    <div class="form-group">
      <textarea placeholder="Примечание" id="projectFF" name="project" cols="40" rows="1"></textarea>
    </div>

    <div class="form-group form-group-select">
      <?php $result = mysqli_query($link, "SELECT * FROM `dle_taxis_price`"); ?>
      <select name="klassAuto" id="klassAuto" type="country" required>
        <option value selected disabled hidden>Класс автомобиля</option>
        <?php while( ($cat = mysqli_fetch_assoc($result)) ){
          echo '<option data-cost=' . $cat["byr"] . ' value=' . $cat["tname"] . '>' . $cat['rname'] . '</option>';
        }?>
      </select>
    </div>
    <p class="stoimost">0</p>
    <input class="inp_stoimost" style="display: none;" type="text" name="stoimost" readonly/>
    <p class="pol_conf">Нажимя на кнопку "Заказать автомобиль", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#">политикой конфеденциальности</a>.</p>

    <button class="btn" type="submit" id="submitFF">Заказать автомобиль</button>
  </form>
</div>

	<script src="script.js"></script>
</body>

</html>