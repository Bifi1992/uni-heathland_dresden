<!DOCTYPE html>
<html lang="en">
<head>
  <title>Heathland Dresden</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  <link href="sass/style.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet">
  <link rel="stylesheet" href="sass/flipclock.css">
</head>
<body>
<main>
  <div class="container">
    <!--Home-->
    <section class="background">
      <?php require "include/section-home.php"; ?>
    </section>
    <!--Line Up-->
    <section class="background">
      <?php require "include/section-lineup.php"; ?>
    </section>
    <!--News-->
    <section class="background">
      <?php require "include/section-news.php"; ?>
    </section>
    <!--Location-->
    <section class="background">
      <?php require "include/section-location.php"; ?>
    </section>
    <!--Contact-->
    <section class="background">
      <?php require "include/section-contact.php"; ?>
    </section>
    <div class="container-pattern col-6 align-self-start">
    </div>
    <div class="container-navtree branch">
    </div>
  </div>
</main>
<?php require "include/scripts.php"; ?>
<!-- Modals-->
<?php require "include/modals/joe-kerman.php"; ?>
<?php require "include/modals/laura-mcneal.php"; ?>
<?php require "include/modals/foxmask.php"; ?>
<?php require "include/modals/sevenwaters.php"; ?>
<?php require "include/modals/ageless-river.php"; ?>
<?php require "include/modals/endless-circle.php"; ?>
<?php require "include/modals/pendulum.php"; ?>
<?php require "include/modals/saturation-memories.php"; ?>
<?php require "include/modals/seventy-three-keys.php"; ?>
<?php require "include/modals/sgt-peppers.php"; ?>
</body>
