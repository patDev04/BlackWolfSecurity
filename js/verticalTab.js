"strict mode";

const tabLinks = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach((tab, idx) => {
  tab.addEventListener("click", () => {
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabLinks.forEach((links) => {
      links.classList.remove("active");
    });
    tabContent[idx].classList.add("active");
    tabLinks[idx].classList.add("active");
  });
});
