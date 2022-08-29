$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  //owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
  });
});
