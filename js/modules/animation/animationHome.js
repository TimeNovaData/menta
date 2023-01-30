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
      // return

      gsap.from("#banner-hero-2",{ ease:"linear",  autoAlpha: 0, })

      gsap.to(".plane-wrapper", {
        //  y: () => window.innerHeight / 4 * -1,
        ease: "none",
        // x: '50%',

        scrollTrigger: {
          trigger: "#banner-hero-2",
          start: "top-=70px top",
          toggleActions: "pause",
          endTrigger: '#banner-hero-2',
          end: "bottom-=100px bottom",
          pin: '.plane-wrapper',
          pinSpacing: false,
          // invalidateOnRefresh: true,
          // anticipatePin: 1,
          
          // scrub: true
        }

      });
      
      gsap.to(".intro", {
        ease: "none",
        scrollTrigger: {
          trigger: "#banner-hero-2",
          start: "top-=70px top",
          toggleActions: "pause",
          endTrigger: '#banner-hero-2',
          end: "bottom-=100px bottom",
          pin: '.intro',
          pinSpacing: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          
          onLeave: function (self) {
              // self.kill(true)     
           
          } 
          // scrub: true
        }

      });


      let tl3 = gsap.timeline({ 
        paused: true,
        scrollTrigger:{
          trigger: ".to-stay",
          markers: true,
          toggleActions: "pause",
          start: "top",
        //   // start: "top",
          end: 'bottom bottom',
          pin: '.to-stay',
          // anticipatePin: 1,
          scrub: 0.01,
          pinSpacing: false,
          endTrigger: '#banner-hero-2',
          
          onUpdate: ({progress}) => {
            // console.log(progress)
         
            return tl3.progress() < progress ? tl3.progress(progress) : null
          }
        },
        
      },)


      gsap.set('.plane-wrapper img',{
        x:-100,
        rotate: 5
      },)

      // rotate(10deg)

      tl3
        .to('.plane-wrapper img',{
          x:20,
          rotate: 0
          // rotate: 1900
        },'<')
       
        .fromTo('.ceu-banner-2',{
          y: -1900
        },{
          // y: () => 1900 - Math.round(window.innerHeight ) + 'px',
          y: () => 2700 - Math.round(window.innerHeight ) + 'px',
        }, '<')
        .to('.pista img', {
        
          ['object-position']: '70%',
          y: 500
        },'<')

        .to('.segundo-plano img', {
          ['object-position']: '50%',
          y: 600
        }, '<')

        .to('#banner-hero-2 .container-2 .intro',{
          y: -50
        },'<')
 
        // .to('#banner-hero-2 .container:not(.container-2) .intro',{
        //   y: 50
        // },'<')
    }

    function colorImagesPin(){
      let mql = window.matchMedia('(max-width:1024px)');
      if(mql.matches) return
      // return
      let keepGoing = true

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
            keepGoing = false
            scrollT.kill(true);
          }

        
        }

      }


      
    }

 return{
  colorImagesPin,
  bannerParallax
 }

}
