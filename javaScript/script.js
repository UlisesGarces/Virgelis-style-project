"use strict";

const carruselFunction = function () {
  ////variables
  const card = document.querySelectorAll(".card");
  const btnLeft = document.querySelector(".button--left");
  const btnRight = document.querySelector(".button--right");
  const homeHeaderBtn = document.querySelector(".home__header--show");
  const homeHeader = document.querySelector(".home__header");
  const cardContact = document.querySelector(".card__contact");
  const openCardContact = document.querySelector(".card--contact--show");
  const closeCardButton = document.querySelector(".card__contact__btn--close");
  const clsePriceBtn = document.querySelector(".price__btn");
  const backgroundBlur = document.querySelector(".background__blur");
  let curSlide = 0;

  /* ======================================================= */
  const PriceBox = document.querySelector(".Price-box");
  const H1Class = document.querySelector(".h1-class");

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
      H1Class.classList.add("Typewr-effect");
    }
  });
  observer.observe(PriceBox);

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  const openCard = function (e) {
    e.preventDefault();
    cardContact.classList.remove("hidden");
    backgroundBlur.classList.remove("hidden");
  };
  const closeCard = function () {
    homeHeader.classList.add("hidden");
    cardContact.classList.add("hidden");
    backgroundBlur.classList.add("hidden");
  };
  openCardContact.addEventListener("click", openCard);
  closeCardButton.addEventListener("click", closeCard);
  clsePriceBtn.addEventListener("click", closeCard);
  backgroundBlur.addEventListener("click", closeCard);
  /* ==================================================== */
  homeHeaderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    homeHeader.classList.remove("hidden");
    backgroundBlur.classList.remove("hidden");
  });

  /* ================================================= */
  document.addEventListener("keydown", function (e) {
    if (
      (e.key === "Escape" && !openCardContact.classList.contains("hidden")) ||
      !homeHeaderBtn.classList.contains("hidden")
    ) {
      closeCard();
    }
  });

  /* ========================================================== */

  //funtions

  function moveSlide(curSlide) {
    card.forEach((Element, i) => {
      Element.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  }
  const sumCurSlide = () => {
    curSlide === card.length - 1 ? (curSlide = 0) : curSlide++;

    moveSlide(curSlide);
  };
  const subCurSlide = () => {
    curSlide === 0 ? (curSlide = card.length - 1) : curSlide--;
    moveSlide(curSlide);
  };
  btnRight.addEventListener("click", sumCurSlide);
  btnLeft.addEventListener("click", subCurSlide);
  document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && subCurSlide();
    e.key === "ArrowRight" && sumCurSlide();
  });

  function init() {
    moveSlide(0);
  }
  init();

  //////////////////////////////////////////////
};
carruselFunction();
