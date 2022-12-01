export default function animation() {

  function emBreve() {
    const $ = {
      form: document.querySelector(".card-form"),
      aviao: document.querySelector(".img-airplane"),
      boxH1: document.querySelector(".intro"),
      h1: document.querySelector(".intro h1")
    }

    gsap.set($.form, { opacity: 0, x: -30 })
    gsap.set($.aviao, { x: "-100vw" })
    gsap.set($.boxH1, { scaleY: "0" })
    gsap.set($.h1, { y: "100px" })

    gsap
      .timeline({ defaults: { duration: 1, ease: "power3" } })
      .to($.aviao, { x: 0, duration: 1.3 }, "tag")
      .to($.boxH1, { scaleY: "1", transformOrigin: "bottom top", duration: 0.3, ease: "sine" }, "tag")
      .to($.h1, { y: 0 }, "tag+=0.3")
      .to($.form, { opacity: 1, x: 0 }, "-=0.8")
  }

  return {
    emBreve
  }

}
