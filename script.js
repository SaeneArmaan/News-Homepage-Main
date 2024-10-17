const menuBar = document.querySelector(".menuBar");
const menuOverlay = document.querySelector(".menuOverlay");
const menuOpenBtn = document.getElementById("menuBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");

menuOpenBtn.addEventListener("click", () => {
  menuBar.style.right = "0%";
  menuOverlay.style.right = "0%";
  document.body.style.overflow = "hidden";
  menuBar.style.animation = "slide-in ease-in .6s";
  menuOverlay.style.animation = "slide-in ease-in .3s";
});

menuCloseBtn.addEventListener("click", () => {
  menuBar.style.right = "100%";
  menuOverlay.style.right = "100%";
  document.body.style.overflow = "";
  menuBar.style.animation = "slide-out ease-out .3s";
  menuOverlay.style.animation = "slide-out ease-out .6s";
});
