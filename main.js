let myInstance = new Macy({
  container: ".macy",
  trueOrder: true,
  waitForImages: false,
  margin: 25,
  columns: 3,
  breakAt: {
    1200: 1,
  },
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: "#leftArrow",
    prevEl: "#rightArrow",
  },
});

// elemenet.textContent = `<a id="rightArrow" class="btn d-flex border-none align-items-center justify-content-center col-6 "><img src="./icons/arrowLeft.svg"></a>
// <a id="leftArrow" class="btn d-flex border-none align-items-center justify-content-center col-6 "><img src="./icons/arrowRight.svg"></a>`;

// const swipper = document.querySelectorAll(".swiper-slide");
// for (let index = 0; index < swipper.length; index++) {
//   console.log(elemenet);
//   swipper[index].appendChild(elemenet);
//   console.log(swipper[index]);
// }
