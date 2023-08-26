const home = document.getElementById("home");
const services = document.getElementById("services");
const craft = document.getElementById("craft");
const homelink = document.getElementById("homelink");
const servicelink = document.getElementById("servicelink");

homelink.addEventListener("click", () => {
  home.style.display = "flex";
  services.style.display = "none";
  craft.style.display = "none";
});

servicelink.addEventListener("click", () => {
  home.style.display = "none";
  services.style.display = "flex";
  craft.style.display = "block";
});
