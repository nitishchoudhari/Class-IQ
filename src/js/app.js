
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = 0;
    const header = document.querySelector(".main-header");
    const btn = document.querySelector(".hamburger");
    const menu = document.getElementById("mobileMenu");
    const hamburgerBtn = document.querySelector('.hamburger');
    const icon = hamburgerBtn.querySelector('.hamburger-icon');

    window.addEventListener("scroll", function () {
        console.log("ScrollY:", window.scrollY);
      });

    function onScroll() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        window.requestAnimationFrame(onScroll);
        }
    }); 
    
    btn.addEventListener("click", () => menu.classList.toggle("active"));

    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      
      if (hamburgerBtn.classList.contains('open')) {
        icon.textContent = '✖'; 
      } else {
        icon.textContent = '☰'; 
      }
    
    });
});