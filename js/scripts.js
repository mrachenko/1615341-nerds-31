const feedbackButton = document.querySelector(".contacts__button");
const feedbackPopup = document.querySelector(".modal");
const feedbackClose = feedbackPopup.querySelector(".feedback__close");
const feedbackForm = feedbackPopup.querySelector(".feedback__form");
const feedbackName = feedbackPopup.querySelector(".feedback__name");
const feedbackEmail = feedbackPopup.querySelector(".feedback__email");

const sliderContainer = document.querySelector(".slider");
const carouselControl = document.querySelector(".carousel__control");
const sliderButtons = carouselControl.querySelectorAll('.carousel__button');
const sliderImages = sliderContainer.querySelectorAll('.carousel__item');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal--active");
  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});


feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal--active");
  feedbackPopup.classList.remove("modal--error");
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal--error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal--active")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal--active");
      feedbackPopup.classList.remove("modal--error");
    }
  }
});


for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    for (let j = 0; j < sliderButtons.length; j++) {
      sliderImages[j].classList.remove("carousel__item--current");
      sliderButtons[j].classList.remove("carousel__button--active");
    }
    sliderImages[i].classList.add("carousel__item--current");
    sliderButtons[i].classList.add("carousel__button--active");
  });
}
