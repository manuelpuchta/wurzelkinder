import Splide from "@splidejs/splide";

new Splide(".splide", {
  autoplay: true,
  gap: "2rem",
  interval: 10000,
  pagination: false,
  perPage: 2,
  breakpoints: {
    800: {
      perPage: 1,
    },
  },
  type: "loop",
}).mount();
