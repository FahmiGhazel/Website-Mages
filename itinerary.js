//--------- CAROUSEL SLIDER BUTTONS ---------//
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
//--x------ CAROUSEL SLIDER BUTTONS ------x--//

// ---------- TYPEWRITER ANIMATION ---------- //
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "5 Days 4 Nights";
  }, 0);
  setTimeout(() => {
    text.textContent = "4 Days 3 Nights";
  }, 2050);
  setTimeout(() => {
    text.textContent = "3 Days 2 Nights";
  }, 4000);
};

textLoad();
setInterval(textLoad, 6000);
// --x------- TYPEWRITER ANIMATION -------x-- //

// ----------- CURRENCY CONTAINER ----------- //
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn-exchange");
const input = document.getElementById("num");
const result = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = input.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Please Choose Different Currencies!");
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      result.value = Object.values(val.rates)[0];
    });
}

// --x-------- CURRENCY CONTAINER --------x-- //
