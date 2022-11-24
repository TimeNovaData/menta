import getElementAndappend from "./modules/getElementAndappend.js";

const PageEmBreve = document.querySelector("#PageEmBreve");
const PageFaq = document.querySelector("#PageFaq");
const PagePost = document.querySelector("#PagePost");
const PageBlog = document.querySelector("#PageBlog");

getElementAndappend(".svg-container", "../../templates/parts/svg.html");

if (PageFaq) {
  document.body.classList.add("PageFaq");
  getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
} else if (PageEmBreve) {
  document.body.classList.add("PageEmBreve");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
} else if (PagePost) {
  document.body.classList.add("PagePost");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
  getElementAndappend(".footer-container", "../../templates/parts/footer.html");
} else if (PageBlog) {
  document.body.classList.add("PageBlog");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
  getElementAndappend(".footer-container", "../../templates/parts/footer.html");
}

const swiper = new Swiper(".swiper-cards", {
  slidesPerView: 1.2,
  spaceBetween: 32,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
