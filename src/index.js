import "./style.css";

const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const navButtons = document.querySelectorAll(".nav button");
const carouselWidth = carousel.offsetWidth;
const carouselContent = carousel.querySelector(".content");
let autoSlideTimeout;

let carouselCurrentPageNumber = 0;

function displayPage(numPage) {
  let newPageIndex = Number(numPage);
  if (newPageIndex < 0) {
    newPageIndex = navButtons.length - 1;
  } else if (navButtons.length <= newPageIndex) {
    newPageIndex = 0;
  }

  navButtons[carouselCurrentPageNumber].classList.toggle("current");
  navButtons[newPageIndex].classList.toggle("current");
  carouselContent.style.translate = `${-carouselWidth * newPageIndex}px`;
  carouselCurrentPageNumber = newPageIndex;
}

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    displayPage(event.target.dataset.page);
  });
});

leftArrow.addEventListener("click", () => {
  displayPage(carouselCurrentPageNumber - 1);
  restartAutoSlide();
});

rightArrow.addEventListener("click", () => {
  displayPage(carouselCurrentPageNumber + 1);
  restartAutoSlide();
});

function autoSlide() {
  autoSlideTimeout = setTimeout(() => {
    displayPage(carouselCurrentPageNumber + 1);
    autoSlide();
  }, 3000);
}

function restartAutoSlide() {
  clearTimeout(autoSlideTimeout);
  autoSlide();
}

autoSlide();
