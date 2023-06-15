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

//validation

const formConsult = modalConsult.querySelector(".feed-form");

function validation(form) {
  let result = true;

  function createError(input, text) {
    const parent = input.parentNode;
    parent.classList.add("error");
    const errorLabel = document.createElement("label");
    errorLabel.classList.add("error__label");
    errorLabel.textContent = text;
    parent.append(errorLabel);
    console.log(parent);
  }

  function removeError(input) {
    const parent = input.parentNode;
    console.log(input);
    if (parent.classList.contains("error")) {
      parent.querySelector(".error__label").remove();
      parent.classList.remove("error");
    }
  }

  form.querySelectorAll("input").forEach((input) => {
    removeError(input);

    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength) {
        createError(
          input,
          `Минимальное кол-во символов ${input.dataset.minLength}`
        );
        result = false;
      }
    }

    if (input.dataset.maxLength) {
      if (input.value.length > input.dataset.maxLength) {
        createError(
          input,
          `Максимальное кол-во символов ${input.dataset.maxLength}`
        );
        result = false;
      }
    }

    if (input.dataset.required == "true") {
      if (input.value == "") {
        removeError(input);
        createError(input, "Поле не заполнено!");
        result = false;
      }
    }
  });

  return result;
}

formConsult.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation(formConsult) === true) {
    alert("its ok");
  }
});

const mainForm = document.getElementById("consultation-form");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation(mainForm) === true) {
    alert("its ok");
  }
});
const orderForm = document.getElementById("order");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validation(orderForm) === true) {
    alert("its ok");
  }
});

//pageup

// window.onscroll = function () {
//   scrollFunction();
// };

const up = document.querySelector(".pageup");
// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     up.classList.add("pageup__show");
//   } else {
//     up.classList.remove("pageup__show");
//   }
// }

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    up.classList.add("pageup__show");
    console.log("he");
  } else {
    up.classList.remove("pageup__show");
  }
});
window.addEventListener("load", () => {
  new WOW().init();
});
