document.addEventListener("DOMContentLoaded", () => {
  const galleryRow = document.getElementById("galleryRow");
  const scrollAmount = 300; // adjust to match your image width + gutter

  // Helper functions
  function atStart(el) {
    return el.scrollLeft <= 0;
  }

  function atEnd(el) {
    const maxLeft = el.scrollWidth - el.clientWidth;
    return el.scrollLeft >= maxLeft - 1; // tolerance for rounding
  }

  // Left button click
  document.getElementById("scrollLeft").addEventListener("click", () => {
    if (atStart(galleryRow)) {
      // Loop back to end
      galleryRow.scrollLeft = galleryRow.scrollWidth - galleryRow.clientWidth;
    } else {
      galleryRow.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });

  // Right button click
  document.getElementById("scrollRight").addEventListener("click", () => {
    if (atEnd(galleryRow)) {
      // Loop back to start
      galleryRow.scrollLeft = 0;
    } else {
      galleryRow.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });
});