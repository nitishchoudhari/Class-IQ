
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = 0;
    const header = document.querySelector(".main-header");

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
});