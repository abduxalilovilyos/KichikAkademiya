// let hozir = "yoq";

// function click(){
//     console.log("bosildi");
//     // let hamburger = document.getElementsByClassName(".hamburger");
//     // if(hozir=="yoq")
//     // {
//     //     hamburger.style.display = "block";
//     //     hozir = "bor";
//     // }
//     // else
//     // {
//     //     hamburger.style.display = "none";
//     //     hozir = "yoq";
//     // }
// }

// document.getElementById("bar").addEventListener("click", function() {
//     console.log("clicked");
//   });
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();