window.onload = () => {
  const toggleNavBtn = document.getElementById("toggle-nav-btn");
  toggleNavBtn.innerHTML = "☰";

  toggleNavBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    toggleNavBtn.innerHTML = document.body.classList.contains("nav-open")
      ? "✕"
      : "☰";
  });
};