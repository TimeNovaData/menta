import getElementAndappend from "./modules/getElementAndappend.js";

const PageEmBreve = document.querySelector("#PageEmBreve");
const PageFaq = document.querySelector("#PageFaq");

getElementAndappend(".svg-container", "../../templates/parts/svg.html");

if (PageFaq) {
  document.body.classList.add("PageFaq");
  getElementAndappend(".footer-container", "../../templates/parts/footer.html");
  getElementAndappend(".menu-container", "../../templates/parts/menu.html");
}


else if (PageEmBreve) {
    document.body.classList.add("PageEmBreve");
    getElementAndappend(".menu-container", "../../templates/parts/menu.html");
}

