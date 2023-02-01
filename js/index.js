import getElementAndappend from "./modules/getElementAndappend.js";
import swiperProps from "./modules/swiperProps.js";
import animation from "./modules/animation.js"
import homeScripts from "./modules/scriptsPaginas/home.js";
import modal from "./modules/modal.js";
import AnimationHome from "./modules/animation/animationHome.js";
import menu from "./modules/menu.js";


const PageEmBreve = document.querySelector("#PageEmBreve");
const PageFaq = document.querySelector("#PageFaq");
const PagePost = document.querySelector("#PagePost");
const PageBlog = document.querySelector("#PageBlog");
const PageHome = document.querySelector("#PageHome");
const PageTrabalhe = document.querySelector("#PageTrabalhe");
const SingleTrabalhe = document.querySelector("#SingleTrabalhe");
const PageContato = document.querySelector("#PageContato");


async function init() {

  await getElementAndappend(".svg-container", "../../templates/parts/svg.html");
  modal()
 

  if (PageFaq) {
    document.body.classList.add("PageFaq");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    /*  */
  } else if (PageEmBreve) {
    document.body.classList.add("PageEmBreve");
    document.querySelectorAll(".faq-menu > nav, .faq-menu .social-media")
      .forEach(i => i.remove())
      animation().emBreve()

  } else if (PagePost) {
    document.body.classList.add("PagePost");
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
    const swiper = new Swiper(".swiper-cards", swiperProps.default);
    //

  } else if (PageBlog) {
    window.scrollTo({ top: 0 });

    document.body.classList.add("PageBlog");
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
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
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
    homeScripts();

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

    if(formFields){
      Object
        .entries(formFields)
        .map(([_, field]) => {
          field?.addEventListener("change", GLOBAL.validaAi);
        });
    }
    
    AnimationHome().bannerParallax()
    AnimationHome().colorImagesPin()     
   

    if (!window.location.hash) {

      const ios = () => {
        if (typeof window === `undefined` || typeof navigator === `undefined`) return false;
    
        return /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || (window.opera && opera.toString() === `[object Opera]`));
    };

    if(ios()){
      var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)

      root.setAttribute( 'class', 'is-ios' );
    }
    
      const banner = document.querySelector('#banner-hero-2')
      if(banner){
        setTimeout(()=>{ 
          console.log('scroll Up')
          window.scrollTo(0, 0) ;
          
        },100)
      }
    }

    if (window.location.hash) {
          setTimeout(()=>{ 
            var hash = window.location.hash;
          const section = document.querySelector(`${hash}`)


          if(section){
            section.scrollIntoView({behavior: "smooth"})
            console.log('runned ?' )
            console.log(section)
          }
        }, 10)
    }

     
    
    // AnimationHome().colorImagesPin()
    // AnimationHome().bannerParallax()
  }else if(PageTrabalhe){
    document.body.classList.add("PageTrabalhe");
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  }
  else if(SingleTrabalhe){
    document.body.classList.add("SingleTrabalhe"); 
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  }
  else if(PageContato){
    document.body.classList.add("PageContato"); 
    await getElementAndappend(".menu-container", "../../templates/parts/menu.html");
    await getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  }


  
  menu()
   
  // SWAP SOCION ON MOBILE
  // document.body.style.opacity = 1

}




init();


  document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("dcl");


    document.body.style.opacity = 1;
    // if(!PageHome){

    //   document.body.style.opacity = 1;
    // }

    
  });



  window.addEventListener('load', () =>{
    if(PageHome){

      
      
    console.log('oie')
    // document.body.style.opacity = 1;
    }
  })
