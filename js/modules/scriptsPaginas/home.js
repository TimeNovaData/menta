export default function homeScripts(){
  

  const swiperFaq = new Swiper('.swiper-faq', {
    slidesPerView: 1.4,
    spaceBetween: 16,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints:{
      540:{
        slidesPerView: 2.2
      },
      700:{
        slidesPerView: 3.2,
      },
      1024:{
        slidesPerView: 4,
        spaceBetween: 32
     
      }
    }
  })

  const swiperTrabalhe = new Swiper('.swiper-trabalhe', {
    slidesPerView: 1.2,
    spaceBetween: 16,

    breakpoints:{
      540:{
        slidesPerView: 2.2,
        spaceBetween: 16,
      },
      768:{
        slidesPerView: 3.2,
        spaceBetween: 16,
     
      },
      1024:{
        slidesPerView: 4,
        spaceBetween: 32
     
      }
    }
  })

  const btnBanner = document.querySelector('#banner-hero-2 .cta-banner-wrapper .btn-primary');
  const btnBanner2 = document.querySelector('#sobre .cta-banner-wrapper .btn-primary');

  
  const contato = document.querySelector('#contato')
  const teste = [btnBanner , btnBanner2]
  console.log(teste)
  teste.forEach(btn => {

    btn.addEventListener('click', ()=>{
      contato.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    })

  });

}
