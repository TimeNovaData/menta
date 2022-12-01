function moveAirplane() {

  function handle(event) {
    var xPos = (event.clientX / document.documentElement.getBoundingClientRect().width) - 0.5,
      yPos = (event.clientY / document.documentElement.getBoundingClientRect().height) - 0.5,
      box = document.querySelector('.img-airplane')

    gsap.to(box, {
      y: 20 * yPos,
      x: 20 * xPos,
      ease: "power1",
      transformOrigin: 'center',
      duration: 1
    });
  };
  document.body.addEventListener("mousemove", handle)
}

export default function animation() {

  function emBreve() {

    const $ = {
      form: document.querySelector(".card-form"),
      aviao: document.querySelector(".img-airplane"),
      boxH1: document.querySelector(".conteudo .intro"),
      h1: document.querySelector(".conteudo .intro h1"),
      cloud1: document.querySelector(".cloud-1"),
      cloud2: document.querySelector(".cloud-2")
    }

    gsap.set($.form, { opacity: 0, x: -30 })
    gsap.set($.aviao, { x: "-100vw" })
    gsap.set($.boxH1, { clipPath: "inset(0 100% 0 0)" })
    gsap.set($.h1, { x: "-100px", opacity: 0 })

    gsap
      .timeline({ defaults: { duration: 1, ease: "power3" } })
      .to($.aviao, { x: 0, duration: 1.9 }, "tag")
      .to($.boxH1, { clipPath: "inset(0px 0.1% 0px 0px)", duration: 0.8, ease: "power3", }, "tag+=0.3")
      .to($.h1, { x: 0, opacity: 1 }, "tag+=0.5")
      .to($.form, { opacity: 1, x: 0 }, "-=1")
      .call(moveAirplane)

    gsap
      .timeline({ defaults: { duration: 8, ease: "none", yoyoEase: "sine" } })
      .to($.cloud1, { x: 190, repeat: -1, yoyo: true }, "tag")
      .to($.cloud2, { x: -190, repeat: -1, yoyo: true }, "tag")

  }

  return {
    emBreve
  }

}

