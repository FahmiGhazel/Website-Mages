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

const form = document.getElementById("form");
const email = document.getElementById("email");
const text = document.getElementById("text");

function validation() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const text = document.getElementById("text");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is Valid";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
  }
}

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
