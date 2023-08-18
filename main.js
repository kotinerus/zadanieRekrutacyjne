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

const welcomeContainer = document.querySelector("#welcomeContainer");
const offerContainer = document.querySelector("#offerContainer");
const aboutContainer = document.querySelector("#aboutContainer");
const endProduct = document.querySelector("#endProduct");
const contact = document.querySelector("#contact");
let _100vw = Math.round(window.innerWidth);

endProductArrowDown.addEventListener("click", (e) => {
  gradient.classList.add("d-none");
  endProductContainer.classList.add("fit-content");
  macyContainer.classList.remove("h-75");
});
if (!navigator.userAgentData.mobile) {
  window.addEventListener("load", () => {
    welcomeContainer.style.left = "0% ";
    welcomeContainer.style.transition = "0.7s";
  });
  const listOfElements = [offerContainer, aboutContainer, endProduct, contact];
  document.addEventListener("DOMContentLoaded", function () {
    const obsOptions = {
      root: null,
      threshold: 0.4,
      rootMargin: `0px ${_100vw}px 0px ${_100vw}px`,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const id = entries[0].target.id;
        const element = document.querySelector(`#${id}`);
        const typeRight = window.getComputedStyle(element).right;
        const typeLeft = window.getComputedStyle(element).left;
        console.log();
        if (typeRight === -_100vw + "px") {
          element.style.right = "0vw";
          element.style.transition = "0.9s";
        } else if (typeLeft === -_100vw + "px") {
          element.style.left = "0vw";
          element.style.transition = "0.9s";
        }
        observer.unobserve(entries[0].target);
      }
    }, obsOptions);
    listOfElements.forEach((element) => {
      observer.observe(element);
    });
  });
} else {
  welcomeContainer.style.position = "initial";
  offerContainer.style.position = "initial";
  aboutContainer.style.position = "initial";
  endProduct.style.position = "initial";
  contact.style.position = "initial";
}
