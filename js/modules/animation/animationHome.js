export default function AnimationHome(){
    gsap.registerPlugin(ScrollTrigger);


    // gsap.set('#banner-hero-2 .intro', { clipPath: "inset(0 100% 0 0)" ,})
    // gsap.set('#banner-hero-2 .intro h1', { opacity: 0})
    // gsap.timeline({})
    // .to('#banner-hero-2 .intro', { clipPath: "inset(0px 0.1% 0px 0px)", duration: 1.2,ease: "power1", },)
    // .to('#banner-hero-2 .intro h1', { opacity: 1}, '<+=0.6')
    // gsap.fromTo('#banner-hero-2 .intro',{
    //   with: 0,
    //   opacity: 0
    // }, {
    //   width: '100%' ,
    //   opacity: 1,
    //   duration: 1
    // })


   

    function bannerParallax(){

      let mql = window.matchMedia('(max-width:2500px)');

      gsap.from("#banner-hero-2",{ ease:"linear",  autoAlpha: 0, })


      gsap.set('#banner-hero-2 .container:not(.container-1)',{
        y: 500
      })

      let tlTeste = gsap.timeline({ 
        
        scrollTrigger:{
          trigger: "#banner-hero-2",
          // markers: true,
          // toggleActions: "pause",
          endTrigger: '#banner-hero-2',
          start: "top-=70px top",

          // start: "top",
          end: 'bottom+=100% bottom',
          pin: '#banner-hero-2',
          // anticipatePin: 1,  
          scrub: 1,
          pinSpacing: true,
        
          
          onUpdate: ({progress}) => {
            // console.log(progress)
         
             if(progress> 0.4){
              console.log('> 0.4')
                gsap.to('#banner-hero-2 .cta-banner-wrapper ',{                
                  
                  x: '-110vw',
                  duration: 0.8


                },) 
                gsap.to('#banner-hero-2 .container:not(.container-1)',{
                  y: '-4vw'
                } )
            
             }else if(progress < 0.4){
              console.log('<>> 0.4')
              gsap.to('#banner-hero-2 .cta-banner-wrapper ',{                
                
                x: '0',
                duration: 0.8 


              },) 
              gsap.to('#banner-hero-2 .container:not(.container-1)',{
                y: 500
              } )
             }
          }
        },
        
      })
    
      gsap.set('.plane-wrapper img',{
        x:-100,
        rotate: 5
      },)

      gsap.set('.ceu-banner-2', {
        y: mql.matches ? -1900 : -500
      })


    tlTeste
      .to('.plane-wrapper img',{
        x:20,
        y:-10,
        rotate: 0
       
        // rotate: 1900
      },'<')
      .to('#banner-hero-2 .container:not(.container-2)', { y: '-5vw'}, '<')
      // .to('#banner-hero-2 .container:not(.container-1)', { y: -200}, '<')
      .to('.ceu-banner-2',{
        scale: 1.3,
        y: -0,
      },'<')                 
      .to('.pista img', {
      
        ['object-position']: '70%',
        y: 600
      },'<')
      .to('.segundo-plano img', {
        ['object-position']: '50%',
        y: 600
      }, '<')


      // MENU 
   
      gsap.from('.menu-links li', {
        y: 30,
        autoAlpha: 0,         
        stagger: 0.1,
      })


   
      return

    }

    function colorImagesPin(){
      let mql = window.matchMedia('(max-width:1024px)');
      // return
      if(mql.matches) return
      // return
      let keepGoing = true

 

      const scrollT = ScrollTrigger.matchMedia({	

        "(min-width: 1024px)": function() {

          ScrollTrigger.create({
            trigger: "#contato",
            // markers: true,
            start: "center center-=70px",
            // start: "top",
            end: "bottom",
            pin: ".images-group",
            anticipatePin: false,
            scrub: 1,
            pinSpacing: true,
          
            onUpdate({progress, direction, isActive}) {
          
              makeItGray(progress,direction,isActive)
                  
            },
          
          
          

        });

        },
        "(max-width: 1023px)": function() {
          ScrollTrigger.create({
            trigger: "#contato",
            // markers: true,
            // start: "center center+=70px",
            start: "top",
            // end: "bottom",
            pin: ".images-group",
            anticipatePin: 1,
            scrub: 1,
            pinSpacing: true,
          
            onUpdate({progress, direction, isActive}) {            
              makeItGray(progress,direction,isActive)              
            },
          });
        }

      })


      function makeItGray (progress, direction, isActive){
        let tlp = 100 - (progress*100 ) 



            
        if(isActive && direction === 1 && keepGoing){

        
          if(progress > 0.2){
            gsap.from('.step-2 img', {
            'filter': `grayscale(${tlp - 0.2 }%)`,
          
            })
          }
          if(progress > 0.4){
            gsap.from('.step-3 img', {
              'filter': `grayscale(${tlp - 0.4 }%)`,
              duration: 0.1
            })
          }

          
          if(progress > 0.99){
            // keepGoing = false
            // scrollT.kill(true);
          }

        
        }

      }


      
    }

    function blog(){
      const tlBlog = gsap.timeline({
        defaults:{ opacity: 0, ease: "back"},
        scrollTrigger:{
          trigger: ".blog-wrapper",
          markers: true,
          // toggleActions: "pause",
         
          // start: "top-=70px top",
          start: "top+=50px top", 
        }

      })

      tlBlog.from('#blog', {
        backgroundColor: 'red'
      })
    }

 return{
  colorImagesPin,
  bannerParallax,
  blog
 }

}
