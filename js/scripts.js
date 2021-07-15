const feedbackButton = document.querySelector(".contacts__button");
const feedbackPopup = document.querySelector(".modal");
const feedbackClose = feedbackPopup.querySelector(".feedback__close");
const feedbackForm = feedbackPopup.querySelector(".feedback__form");
const feedbackName = feedbackPopup.querySelector(".feedback__name");
const feedbackEmail = feedbackPopup.querySelector(".feedback__email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal--active");
  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});


feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal--active");
  feedbackPopup.classList.remove("modal--error");
});

feedbackForm.addEventListener("submit", function (evt) {
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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal--active")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal--active");
      feedbackPopup.classList.remove("modal--error");
    }
  }
});
