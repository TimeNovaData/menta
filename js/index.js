import getElementAndappend from "./modules/getElementAndappend.js";
import swiperProps from "./modules/swiperProps.js";

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
  //
} else if (PagePost) {
  document.body.classList.add("PagePost");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
  getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  const swiper = new Swiper(".swiper-cards", swiperProps.default);
  //

} else if (PageBlog) {
  document.body.classList.add("PageBlog");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
  getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  const swiper = new Swiper(".swiper-cards", swiperProps.default);

  const formFields = {
    nameInput: document.querySelector("#name"),
    dateInput: document.querySelector("#date"),
    telInput: document.querySelector("#tel"),
    emailInput: document.querySelector("#email"),
    //
  };

  IMask(formFields.dateInput, { mask: "00/00/0000" });
  IMask(formFields.telInput, { mask: "(00) 00000-0000" });

  Object
    .entries(formFields)
    .map(([_, field]) => {
      field.addEventListener("change", GLOBAL.validaAi);
    });

}

const switchModal = () => {
  const modal = document.querySelector(".modal");
  let actualStyle = modal.style.display;
  if (actualStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

const btn = document.querySelector(".modal-btn");
btn.addEventListener("click", switchModal);

window.onclick = function (event) {
  event.preventDefault();

  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    switchModal();
  }
};
