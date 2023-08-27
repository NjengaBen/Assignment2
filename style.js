const home = document.getElementById("home");
const midSection = document.getElementById("mid-section");
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
