export default function menu() {
  const btnMobile = document.getElementById('btn-mobile');
  const headerEl = document.querySelector('.menu-container');
  let mql = window.matchMedia('(max-width: 1024px)');
  let estado = true;



  function animateIt() {    
      if(!mql.matches) return
    const tl = gsap.timeline();
    if(estado){
      gsap.set('.menu-links li',{
        y:20,
        opacity: 0,
        
      })
      tl.to('.menu-links', {
        x: 0,
        ease: Sine.easeOut
      })
      .to('.menu-links li',{
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: Back.easeOut.config(3.7)
      }, '-=0.2')

      estado = !estado
    
    } else {
      tl
      .to('.menu-links li',{ 
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.2,
        ease: Sine.easeOut
      })
      .to('.menu-links', {
        x: '-100%' 
      })
    
      estado = !estado
    }
  }

  function toggleMenu(event) {
     if(event.type === 'touchstart') event.preventDefault();
     const nav = document.querySelector('.faq-menu');
     
     nav.classList.toggle('active');
     const active = nav.classList.contains('active');
     event.currentTarget.setAttribute('aria-expanded', active);

    


     animateIt()


     if (active) {
         event.currentTarget.setAttribute('aria-label', 'Fechar menu')
     } else {
         event.currentTarget.setAttribute('aria-label', 'Abrir menu')
     } 
   
  }


  btnMobile?.addEventListener('click', toggleMenu);


  const socialDesktop = document.querySelector('.social-desktop')
  const socialMobile = document.querySelector('.social-mobile')

  if(socialMobile &&  socialMobile){
    socialMobile.innerHTML = socialDesktop.innerHTML;
  }

  window.addEventListener("scroll", function () {

    headerEl.classList.toggle("sticky", window.scrollY > 150);

  });

}
