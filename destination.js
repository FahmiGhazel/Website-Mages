//-------- Subscribe Newsletter Popup --------//
const newsletterBtn = document.querySelector(".newsletter-btn");
const newsletterBtnClose = document.querySelector(".newsletter-close-btn");
const newsletter = document.querySelector(".newsletter");
const btn = document.getElementById("btn");

newsletterBtn.addEventListener("click", function (modalOpen) {
  newsletter.classList.add("active");
  newsletterBtn.classList.add("active");
});
newsletterBtnClose.addEventListener("click", function (modalClose) {
  newsletter.classList.add("active");
  newsletterBtn.classList.remove("active");
});
//--x----- Subscribe Newsletter Popup -----x--//

//------ Thank You Alert upon Subscribe ------//
btn.addEventListener("click", function () {
  alert(`Thank you for subscribing!`);
});
//--x--- Thank You Alert upon Subscribe ---x--//

function onHover() {
  $("#image1").attr("src", "images/garden.jpg");
}

function offHover() {
  $("#image1").attr("src", "images/flyer.jpg");
}
