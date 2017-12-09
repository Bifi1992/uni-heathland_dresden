<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">

    <meta property="og:url" content="http://heathland.fateyedive-records.de"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Heathland Dresden"/>
    <meta property="og:description" content="Heathland Dresden Folk Festival"/>
    <meta property="og:image" content="http://heathland.fateyedive-records.de/img/heathland_og.jpg"/>
    <title>Heathland Dresden</title>

    <!--Favicon-->
    <link rel="shortcut icon" href="img/favicon.ico" title="Favicon"/>

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
        <section class="background up-scroll">
            <?php require "include/section-home.php"; ?>
        </section>
        <!--Line Up-->
        <section class="background up-scroll">
            <?php require "include/section-lineup.php"; ?>
        </section>
        <!--News-->
        <section class="background up-scroll">
            <?php require "include/section-news.php"; ?>
        </section>
        <!--Location-->
        <section class="background up-scroll">
            <?php require "include/section-location.php"; ?>
        </section>
        <!--Contact-->
        <section class="background up-scroll">
            <?php require "include/section-contact.php"; ?>
        </section>
        <div class="container-pattern col-6 align-self-start">
        </div>
        <div class="container-navtree branch">
        </div>
        <div class="container-social">
            <a href="https://twitter.com/heathlandfolk">
                <img alt="self-Logo" src="img/twitter.svg">
            </a>
            <img alt="self-Logo" src="img/facebook.svg">
            <img alt="self-Logo" src="img/youTube.svg">
            <a href="https://www.instagram.com/heathlanddresden/">
                <img alt="self-Logo" src="img/instagram.svg">
            </a>
        </div>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li class="menu-li">Home</li>
                    <li class="menu-li">Line Up</li>
                    <li class="menu-li">News</li>
                    <li class="menu-li">Location</li>
                    <li class="menu-li">Contact</li>
                </ul>
            </div>
        </nav>
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
<?php require "include/modals/tickets.php"; ?>
</body>
