const home = document.getElementById("home");
const midSection = document.getElementById("mid-section");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
const homelink = document.getElementById("homelink");
const servicelink = document.getElementById("servicelink");
const loginTag = document.getElementById("getRegistered");
const registerClass = document.querySelector(".register");
const buttonCancel = document.getElementById("button-cancel");

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
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  hamburger.style.display = "inline-block";
  close.style.display = "none";
  navbar.classList.remove("active");
});

loginTag.addEventListener("click", () => {
  registerClass.style.visibility = "visible";
});

buttonCancel.addEventListener("click", () => {
  window.close();
});
