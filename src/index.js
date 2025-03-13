import "./style.css";

const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const navButtons = document.querySelectorAll(".nav button");
const carouselWidth = carousel.offsetWidth;
const carouselContent = carousel.querySelector(".content");

let carouselCurrentPageNumber = 0;

function displayPage(numPage) {
  const newPageIndex = Number(numPage);
  if (newPageIndex < 0 || navButtons.length <= newPageIndex) {
    return;
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
});

rightArrow.addEventListener("click", () => {
  displayPage(carouselCurrentPageNumber + 1);
});
