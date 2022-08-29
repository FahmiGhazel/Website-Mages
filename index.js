$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
