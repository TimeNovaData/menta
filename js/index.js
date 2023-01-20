import getElementAndappend from "./modules/getElementAndappend.js";
import swiperProps from "./modules/swiperProps.js";
import animation from "./modules/animation.js"
import homeScripts from "./modules/scriptsPaginas/home.js";
import modal from "./modules/modal.js";
import AnimationHome from "./modules/animation/animationHome.js";


const PageEmBreve = document.querySelector("#PageEmBreve");
const PageFaq = document.querySelector("#PageFaq");
const PagePost = document.querySelector("#PagePost");
const PageBlog = document.querySelector("#PageBlog");
const PageHome = document.querySelector("#PageHome");
const PageTrabalhe = document.querySelector("#PageTrabalhe");
const SingleTrabalhe = document.querySelector("#SingleTrabalhe");



async function init() {

  getElementAndappend(".svg-container", "../../templates/parts/svg.html");
  modal()
 
  if (PageFaq) {
    document.body.classList.add("PageFaq");
    getElementAndappend(".footer-container", "../../templates/parts/footer.html");
    getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    /*  */
  } else if (PageEmBreve) {
    document.body.classList.add("PageEmBreve");
    document.querySelectorAll(".faq-menu > nav, .faq-menu .social-media")
      .forEach(i => i.remove())
      animation().emBreve()

  } else if (PagePost) {
    document.body.classList.add("PagePost");
    getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    getElementAndappend(".footer-container", "../../templates/parts/footer.html");
    const swiper = new Swiper(".swiper-cards", swiperProps.default);
    //

  } else if (PageBlog) {
    window.scrollTo({ top: 0 });

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

    // IMask(formFields.dateInput, { mask: "00/00/0000" });
    // IMask(formFields.telInput, { mask: "(00) 00000-0000" });

    if(formFields){


      Object
        .entries(formFields)
        .map(([_, field]) => {
          field?.addEventListener("change", GLOBAL.validaAi);
        });
    }

  }else if (PageHome){
    document.body.classList.add("PageHome");
    getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    getElementAndappend(".footer-container", "../../templates/parts/footer.html");
    homeScripts();
    const swiper = new Swiper(".swiper-cards", swiperProps.default);

    const formFields = {
      nameInput: document.querySelector("#name"),
      dateInput: document.querySelector("#date"),
      telInput: document.querySelector("#tel"),
      emailInput: document.querySelector("#email"),
      //
    };

    // IMask(formFields.dateInput, { mask: "00/00/0000" });
    // IMask(formFields.telInput, { mask: "(00) 00000-0000" });

    if(formFields){


      Object
        .entries(formFields)
        .map(([_, field]) => {
          field?.addEventListener("change", GLOBAL.validaAi);
        });
    }
 
    
    AnimationHome().colorImagesPin()
    AnimationHome().bannerParallax()
  }else if(PageTrabalhe){
    document.body.classList.add("PageTrabalhe");
    getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  }
  else if(SingleTrabalhe){
    document.body.classList.add("SingleTrabalhe"); 
    getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  }

  document.body.style.opacity = 1


  


}
init()
// const switchModal = () => {
//   const modal = document.querySelector(".modal");

//   let actualStyle = modal.style.display;
//   if (actualStyle == "block") {
//     modal.style.display = "none";
//   } else {
//     modal.style.display = "block";
//   }
// };

// const btn = document.querySelector(".modal-btn");
// btn.addEventListener("click", switchModal);

// window.onclick = function (event) {
//   event.preventDefault()
//   console.log('Trocou modal!')

//   const modal = document.querySelector(".modal");
//   if (event.target == modal) {
//     switchModal();
//   }
// };
