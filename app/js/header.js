//back to top
const btnBackToTop = document.getElementById("back-to-top");
const scrollFunction = () => {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
};
window.onscroll = function () {
  scrollFunction();
};
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
btnBackToTop.addEventListener("click", backToTop);

//header
const header = document.getElementById("header");
const introduce = header.querySelector(".introduce");
const introduceBox = header.querySelector(".introduce-box");

const project = header.querySelector(".project");
const projectBox = header.querySelector(".project-box");

introduce.addEventListener("mouseenter", () => {
  introduceBox.classList.add("active");
});
introduce.addEventListener("mouseleave", () => {
  introduceBox.classList.remove("active");
});

project.addEventListener("mouseenter", () => {
  projectBox.classList.add("active");
});
project.addEventListener("mouseleave", () => {
  projectBox.classList.remove("active");
});