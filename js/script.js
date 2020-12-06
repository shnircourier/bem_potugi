const linksArray = document.querySelectorAll("a[href^='#']");

for (let link of linksArray) {
   link.addEventListener("click", e => {
      e.preventDefault();
      const elemId = link.getAttribute("href");
      document.querySelector(elemId).scrollIntoView({
         behavior: "smooth",
         block: "start"
      });
   });
}

const portfolioNavbar = document.querySelector(".portfolio__lists.nav-list");
const portfolioLinks = portfolioNavbar.children;
const imageBlock = document.querySelector(".portfolio__image-block");

console.log(imageBlock.children[0])

for (let link of portfolioLinks) {
   link.addEventListener("click", () => {
      removeActiveLink();
      link.classList.add("nav-list__item_active");
      hiddenImage(link.dataset.category);
   });
}

function removeActiveLink() {
   for (let nav of portfolioNavbar.children) {
      nav.classList.remove("nav-list__item_active");
   }
}

function hiddenImage(exception) {
   for (let img of imageBlock.children) {
      if (exception === "all")
         img.classList.remove("portfolio__image_hidden");
      else if (img.dataset.category === exception)
         img.classList.remove("portfolio__image_hidden");
      else img.classList.add("portfolio__image_hidden");
   }
}