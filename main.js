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
const offerContainer = document.querySelector("#offerContainer");
const aboutContainer = document.querySelector("#aboutContainer");

const welcomeContainer = endProductArrowDown.addEventListener("click", (e) => {
  gradient.classList.add("d-none");
  endProductContainer.classList.add("fit-content");
  macyContainer.classList.remove("h-75");
});

window.addEventListener("load", () => {
  welcomeContainerFluid.style.left = "0% ";
  welcomeContainerFluid.style.transition = "0.7s";
});
document.addEventListener("DOMContentLoaded", function () {
  const obsOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const id = entries[0].target.id;
      const element = document.querySelector(`#${id}`);
      element.style.opacity = 1;
      element.style.transition = "0.9s";

      observer.unobserve(entries[0].target);

      // Tu umieść kod, który ma być wywołany, gdy element jest widoczny
    }
  }, obsOptions);

  observer.observe(offerContainer);
});
