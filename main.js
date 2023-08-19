const endProductArrowDown = document.querySelector("#endProduct_arrowDown");
const gradient = document.querySelector(".gradient_top");
const macyContainer = document.querySelector(".macy");
const welcomeContainer = document.querySelector("#welcomeContainer");
const offerContainer = document.querySelector("#offerContainer");
const aboutContainer = document.querySelector("#aboutContainer");
const endProductContainer = document.querySelector("#endProductContainer");
const contactContainer = document.querySelector("#contactContainer");
const navLinkButton = document.querySelectorAll(".nav-bar-button");
let _100vw = Math.round(window.innerWidth);
const listOfElements = [
  offerContainer,
  aboutContainer,
  endProductContainer,
  contactContainer,
];
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
const defaultFunction = () => {
  listOfElements.forEach((element) => {
    element.classList.add("position-static");
    element.classList.remove("nav-bar-button");
  });
};
navLinkButton.forEach((button) => {
  button.addEventListener("click", defaultFunction());
});

endProductArrowDown.addEventListener("click", (e) => {
  gradient.classList.add("d-none");
  endProductContainer.style.height = "auto";
  endProductContainer.style.transition = "0.9s";
  endProductContainer.style.overflow = "visible";
});

if (!navigator.userAgentData.mobile) {
  document.addEventListener("DOMContentLoaded", function () {
    welcomeContainer.style.left = "0% ";
    welcomeContainer.style.transition = "0.5s";
    const obsOptions = {
      root: null,
      threshold: 0.2,
      rootMargin: `0px ${_100vw}px 0px ${_100vw}px`,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const id = entries[0].target.id;
        const element = document.querySelector(`#${id}`);
        const typeRight = window.getComputedStyle(element).right.split("px")[0];
        typeRight < 0
          ? (element.style.right = "0vw")
          : (element.style.left = "0vw");
        element.style.transition = "0.9s";
        observer.unobserve(entries[0].target);
      }
    }, obsOptions);
    listOfElements.forEach((element) => {
      observer.observe(element);
    });
  });
} else {
  defaultFunction();
}
