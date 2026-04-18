document.addEventListener("DOMContentLoaded", () => {
  const scrollAmount = 300;

  function atStart(el) { return el.scrollLeft <= 0; }
  function atEnd(el) { return el.scrollLeft >= el.scrollWidth - el.clientWidth - 1; }

  document.querySelectorAll(".section-container").forEach(section => {
    const gallery = section.querySelector(".scroll-gallery");
    const leftBtn = section.querySelector(".gallery-nav .nav-btn:first-child");
    const rightBtn = section.querySelector(".gallery-nav .nav-btn:last-child");

    if (gallery && leftBtn && rightBtn) {
      leftBtn.addEventListener("click", () => {
        if (atStart(gallery)) {
          gallery.scrollLeft = gallery.scrollWidth - gallery.clientWidth;
        } else {
          gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      });

      rightBtn.addEventListener("click", () => {
        if (atEnd(gallery)) {
          gallery.scrollLeft = 0;
        } else {
          gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      });
    }
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});