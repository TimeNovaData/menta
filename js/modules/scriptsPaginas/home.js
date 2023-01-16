export default function homeScripts(){
  

  const swiperFaq = new Swiper('.swiper-faq', {
    slidesPerView: 1.4,
    spaceBetween: 16,

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
}
