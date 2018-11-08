//Preloader
// $(window).on("load", function() {
//   // makes sure the whole site is loaded
//   setTimeout(function() {
//     new WOW().init();
//     $(".loading").hide();
//     $(".content").fadeIn(); // will fade out the white DIV that covers the website.
//   }, 3000);
// });

//header-pop
$(".header-item__link,.nav-item").click(function() {
  $(".header-pop__bg").css("display", "block");
  $("body");
  $(".header-pop__exit").click(function() {
    $(".header-pop__bg").css("display", "none");
    $(".nav-btn").click();
  });
});

//Scroll for menu
$(document).ready(function() {
  $(".header-menu,.header-scroll").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 3000);
  });
});
$(".nav-wrapper").on("click", "li a", function() {
  $(".nav-btn").click();
});
//Video click button
$(".work-item__box-circle").click(function() {
  $(".work-video").css("display", "block");
  $(".work-video__exit").click(function() {
    $(".work-video").css("display", "none");
    var videoURL = $(".work-video__iframe").prop("src");
    videoURL = videoURL.replace("&autoplay=1", "");
    $(".work-video__iframe").prop("src", "");
    $(".work-video__iframe").prop("src", videoURL);
  });
});
//Button header scroll
$(document).ready(function() {
  $(".header-scroll").click(function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 2000);
  });
});

//Map
$(function() {
  var map;
  var LocsA = [
    {
      lat: 55.885548,
      lon: 37.602339,
      text: "1",
      html: "ТЦ “АЛЕКСАНДР”",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.86283381,
      lon: 37.60142868,
      html: "ТЦ “ЗОЛОТОЙ ВАВИЛОН",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.61960791,
      lon: 37.509729,
      html: "ТЦ “СПЕКТР”",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.7822073,
      lon: 37.7042475,
      html: "ТЦ “СЕРЕБРЯНЫЙ ДОМ” 1-Й ЭТАЖ",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.7822073,
      lon: 37.7042475,
      html: "ТЦ “СЕРЕБРЯНЫЙ ДОМ” 3-Й ЭТАЖ",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.75193516,
      lon: 37.85925585,
      html: "ТЦ “ЭКВАТОР” (РЕУТОВ)",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.8647253,
      lon: 37.4335691,
      html: "ТЦ “ПЛАНЕРНАЯ”",
      zoom: 14,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    },
    {
      lat: 55.75222,
      lon: 37.61556,
      title: "Москва",
      zoom: 10,
      icon: "../img/custom-marker.svg",
      animation: google.maps.Animation.DROP
    }
  ];

  map = new Maplace({
    locations: LocsA,
    map_div: "#gmap",
    generate_controls: false,
    start: 8,
    styles: {
      Greyscale: [
        {
          featureType: "all",
          stylers: [{ invert_lightness: "true" }]
        }
      ],
      Light: [
        {
          featureType: "all",
          stylers: [{ saturation: -100 }, { gamma: 0.7 }]
        }
      ]
    }
  }).Load();

  $(".loc_link").click(function() {
    var loc = $(this).data("loc");
    map.ViewOnMap(loc);
  });
});

// Accordion contact for Addres
var accordion = (function() {
  var $accordion = $(".accordion-item");
  var $accordion_header = $accordion.find(".accordion-link");
  var $accordion_item = $(".accordion-item");

  // default settings
  var settings = {
    // animation speed
    speed: 700,
    // close all other accordion items if true
    oneOpen: false
  };

  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on("click", function() {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $(".accordion-item.active").length > 1) {
        $(".accordion-item.active:not(:first)").removeClass("active");
      }

      // reveal the active accordion bodies
      $(".accordion-item.active")
        .find("> .accordion-div")
        .show();
    },
    toggle: function($this) {
      if (
        settings.oneOpen &&
        $this[0] !=
          $this
            .closest(".contact-accordion")
            .find("> .accordion-item.active > .accordion-link")[0]
      ) {
        $this
          .closest(".contact-accordion")
          .find("> .accordion-item")
          .removeClass("active")
          .find(".accordion-div")
          .slideUp();
      }

      // show/hide the clicked accordion item
      $this.closest(".accordion-item").toggleClass("active");
      $this
        .next()
        .stop()
        .slideToggle(settings.speed);
    }
  };
})();

$(document).ready(function() {
  accordion.init({ speed: 500, oneOpen: true });
});
