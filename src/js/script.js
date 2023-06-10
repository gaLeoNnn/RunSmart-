const swiper = new Swiper(".swiper", {
  loop: true,
  direction: "horizontal",
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tabs = document.querySelectorAll(".catalog__tab");
const content = document.querySelectorAll(".catalog__content");

tabs.forEach((item) => {
  item.addEventListener("click", () => {
    const clickedTabIndex = Array.from(tabs).findIndex((tab) => tab === item);
    tabs.forEach((item) => {
      item.classList.remove("catalog__tab_active");
    });
    content.forEach((item) => {
      item.classList.remove("catalog__content_active");
    });
    item.classList.add("catalog__tab_active");
    content[clickedTabIndex].classList.add("catalog__content_active");
  });
});

const btn = document.querySelectorAll(".catalog-item__link");
const btnBack = document.querySelectorAll(".catalog-item__back");

btn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    const target = e.currentTarget.closest(".catalog-item");
    const list = target.querySelector(".catalog-item__content");
    const ul = target.querySelector(".catalog-item__list");
    list.classList.toggle("catalog-item__content_active");
    ul.classList.toggle("catalog-item__list_active");
  });
});

btnBack.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.currentTarget.closest(".catalog-item");
    const list = target.querySelector(".catalog-item__content");
    const ul = target.querySelector(".catalog-item__list");
    list.classList.toggle("catalog-item__content_active");
    ul.classList.toggle("catalog-item__list_active");
  });
});
