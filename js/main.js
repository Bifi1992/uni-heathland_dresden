// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 60; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function () {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
// display countdown timer
var displayCountdown = function () {
  // time until 12th May 2018
  var endDate = new Date("2018-05-12T12:00:00.000Z");
  var seconds = (endDate.getTime() - new Date().getTime()) / 1000;
  var clock = $('.countdown-container').FlipClock(seconds, {
    countdown: true,
    autoStart: false,
    clockFace: 'DailyCounter',
    showSeconds: false
  });
  clock.start();

};
displayCountdown();

function initMap() {
  var locCenter = {lat: 51.113199, lng: 13.829506};
  var ochre = '#D2DA77';
  var green1 = '#046003';
  var green2 = '#032823';
  var green3 = '#044003';
  var green4 = '#349752';
  var brown = '#211812';
  var brown2 = '#372d22';
  var grey = '#777777';
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: locCenter,
    styles: [
      {elementType: 'geometry', stylers: [{color: brown2}]},
      {elementType: 'labels.text.stroke', stylers: [{color: ochre}]},
      {elementType: 'labels.text.fill', stylers: [{color: grey}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: grey}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: grey}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#284c6c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });

  // Define the LatLng coordinates for the polygon's path.
  /*
   51.116470, 13.827798
   51.114104, 13.824926
   51.113578, 13.825116
   51.113262, 13.827703
   51.111264, 13.829530
   51.109503, 13.830452
   51.111759, 13.833969
   51.113959, 13.831576
   51.116470, 13.827798
   */
  var polyCoords = [
    {lat: 51.116470, lng: 13.827798},
    {lat: 51.114104, lng: 13.824926},
    {lat: 51.113578, lng: 13.825116},
    {lat: 51.113262, lng: 13.827703},
    {lat: 51.111264, lng: 13.829530},
    {lat: 51.109503, lng: 13.830452},
    {lat: 51.111759, lng: 13.833969},
    {lat: 51.113959, lng: 13.831576},
    {lat: 51.116470, lng: 13.827798}
  ];

  // Construct the polygon.
  var festLoc = new google.maps.Polygon({
    paths: polyCoords,
    strokeColor: green3,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: green4,
    fillOpacity: 0.35
  });
  festLoc.setMap(map);
}


/*
 function initMap() {
 var location = {lat: 51.113199, lng: 13.829506};
 var map = new google.maps.Map(document.getElementById('map'), {
 zoom: 4,
 center: location
 });
 var marker = new google.maps.Marker({
 position: location,
 map: map
 });
 }
 */