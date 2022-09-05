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
  newsletter.classList.remove("active");
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

// Sticky Navigation

const sectionHeroDest = document.querySelector(".section-hero-destination");

const obser = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obser.observe(sectionHeroDest);
