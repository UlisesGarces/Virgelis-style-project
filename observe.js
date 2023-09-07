"strict mode";
const PriceSection = document.querySelector(".Price-section");
const H1Class = document.querySelector(".h1-class");

const observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    H1Class.classList.add("Typewr-effect");
  }
});
observer.observe(PriceSection);
