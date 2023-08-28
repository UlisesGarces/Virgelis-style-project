'use strict';
const carruselFunction = function () {
  ////variables

  const slider = document.querySelector('.slider');
  const card = document.querySelectorAll('.card');
  const btnLeft = document.querySelector('.button--left');
  const btnRight = document.querySelector('.button--right');
  let curSlide = 0;
  //funtions

  function moveSlide(curSlide) {
    card.forEach((Element, i) => {
      Element.style.transform = `translateX(${100* (i - curSlide)}%)`;
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
  btnRight.addEventListener('click', sumCurSlide);
  btnLeft.addEventListener('click', subCurSlide);
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && subCurSlide();
    e.key === 'ArrowRight' && sumCurSlide();
  });

  function init() {
    moveSlide(0);
  }
  init();

  //////////////////////////////////////////////
};
carruselFunction();
