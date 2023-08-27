const home = document.getElementById("home");
const midSection = document.getElementById("mid-section");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const homelink = document.getElementById("homelink");
const servicelink = document.getElementById("servicelink");

homelink.addEventListener("click", () => {
  home.style.display = "grid";
  midSection.style.display = "none";
});

servicelink.addEventListener("click", () => {
  home.style.display = "none";
  midSection.style.display = "grid";
});

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  close.style.display = "inline-block";
});

close.addEventListener("click", () => {
  hamburger.style.display = "inline-block";
  close.style.display = "none";
});
