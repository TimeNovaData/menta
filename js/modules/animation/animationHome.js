export default function AnimationHome(){
  gsap.registerPlugin(ScrollTrigger);


  function bannerParallax(){
    // gsap.set('#banner-hero', {
    //   y:'-150vh'
    // })
    let tl2 = gsap.timeline({ 
      scrollTrigger:{
       trigger: "#banner-hero",
       markers: true,
       start: "top",
      //   // start: "top",
        end: 'bottom-=100px',
       pin: '#banner-hero',
       anticipatePin: 1,
       scrub: 2,
         pinSpacing: true,
      onUpdate({progress, direction, isActive}) {            
        console.log(progress)              
      },
      },
     
    });

    tl2
    .to('.plane-wrapper img',{
      x:20
    })
    .to('.ceu-banner img',{
       y:200,
      ['object-position']: '100%',
    },'<')
    .to('.pista img', {
      // x: -200,
      ['object-position']: '50%',
      y: 200
    },'<')
    .to('.segundo-plano img', {
      ['object-position']: '30%',
      y: 200
    }, '<')
    //  tl2.from('.parallax-group-images', {
    //    y: 100
    // })

    //  gsap.set('#banner-hero', { y: '-800px'})


  }


 function colorImagesPin(){
 

  let keepGoing = true



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
        keepGoing = false
        tl.scrollTrigger.kill(true);
      }

    
    }

  }




  let tl = gsap.timeline({ 

    // scrollTrigger: {
    //   trigger: "#contato",
    //   markers: true,
    //   // start: "center center+=70px",
    //   start: "top",
    //   // end: "bottom",
    //   pin: ".images-group",
    //   anticipatePin: 1,
    //   scrub: 1,
    //   pinSpacing: true,
    
    //   onUpdate({progress, direction, isActive}) {
    
    //     let tlp = 100 - (progress*100 ) 



      
    //     if(isActive && direction === 1 && keepGoing){
  
        
    //       if(progress > 0.2){
    //         gsap.from('.step-2 img', {
    //          'filter': `grayscale(${tlp - 0.2 }%)`,
          
    //         })
    //       }
    //        if(progress > 0.4){
    //         gsap.from('.step-3 img', {
    //           'filter': `grayscale(${tlp - 0.4 }%)`,
    //           duration: 0.1
    //          })
    //       }

          
    //       if(progress > 0.99){
    //         // keepGoing = false
    //         // tl.scrollTrigger.kill(true);
    //       }

        
    //     }
    //     // console.log(`Progress: ${(progress*100 -100).toFixed()}%`)         
    //   },
      
    // },

  })

  ScrollTrigger.matchMedia({	

    "(min-width: 1024px)": function() {

      ScrollTrigger.create({
        trigger: "#contato",
        // markers: true,
        start: "center center-=70px",
        // start: "top",
        end: "bottom",
        pin: ".images-group",
        anticipatePin: 1,
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



   
 }

 return{
  colorImagesPin,
  bannerParallax
 }

}
