const myInstance = new Macy({
  container: ".macy",
  trueOrder: true,
  waitForImages: false,
  margin: 25,
  columns: 3,
  breakAt: {
    1200: {
      margin: { x: 10, y: 20 },
      columns: 1,
    },
  },
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const endProductArrowDown = document.querySelector("#endProduct_arrowDown");
const gradient = document.querySelector(".gradient_top");
const endProductContainer = document.querySelector("#endProduct");
const macyContainer = document.querySelector(".macy");
const welcomeContainerFluid = document.querySelector("#welcomeContainer");
const welcomeContainer = endProductArrowDown.addEventListener("click", (e) => {
  gradient.classList.add("d-none");
  endProductContainer.classList.add("fit-content");
  macyContainer.classList.remove("h-75");
});

window.addEventListener("load", () => {
  welcomeContainerFluid.style.left = "0% ";
  welcomeContainerFluid.style.transition = "0.7s";
});
let options = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 0.5,
  isIntersecting: true,
};

let observer = new IntersectionObserver((e) => {});

const elementsToObserve = Array.from(document.querySelectorAll(".animate"));
elementsToObserve.forEach((element) => {
  observer.observe(element);
});
