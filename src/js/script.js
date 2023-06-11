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

//TABS
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

//
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

// MODAL
const btnConsult = document.querySelectorAll(
  "button[data-attribute='consultation']"
);
const overlay = document.querySelector(".overlay");
const modalConsult = document.getElementById("consultation");
const close = document.querySelectorAll(".modal__close");

btnConsult.forEach((item) => {
  item.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.classList.add("show");
    modalConsult.style.visibility = "visible";
    modalConsult.classList.add("slow");
  });
});

const minBtn = document.querySelectorAll(".catalog-item__btn");
const modalOrder = document.getElementById("order");
const subtitie = document.querySelectorAll(".catalog-item__title");

minBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const parent = e.target.parentElement.parentElement;
    const title = parent.querySelector(".catalog-item__title");
    const forChange = modalOrder.querySelector(".modal__subtitle");

    forChange.textContent = title.textContent;

    overlay.style.visibility = "visible";
    overlay.classList.add("show");
    modalOrder.style.visibility = "visible";
    modalOrder.classList.add("slow");
  });
});

//close all modal elements
close.forEach((item) => {
  item.addEventListener("click", () => {
    overlay.style.visibility = "hidden";
    overlay.classList.remove("show");
    modalConsult.style.visibility = "hidden";
    modalConsult.classList.remove("slow");
    modalOrder.style.visibility = "hidden";
    modalOrder.classList.remove("slow");
  });
});
