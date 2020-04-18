'use strict';
var filterWrapper = document.querySelector('.filter-by-place');
var buttonBurger = document.querySelector('.filter-by-place__toggle--burger');
var openButtonText = document.querySelector('.filter-by-place__show-more');
var closeButton = document.querySelector('.filter-by-place__toggle-dots');
var closeButtonLast = document.querySelector('.filter-by-place__button-close');
var closeButtontext = document.querySelector('.filter-by-place__close');

var switchMode = function () {
  if (filterWrapper.classList.contains('filter-by-place--closed')) {
    filterWrapper.classList.remove('filter-by-place--closed');
    filterWrapper.classList.add('filter-by-place--opened');
  } else {
    filterWrapper.classList.add('filter-by-place--closed');
    filterWrapper.classList.remove('filter-by-place--opened');
  }
};

buttonBurger.addEventListener('click', switchMode);
openButtonText.addEventListener('click', switchMode);
closeButton.addEventListener('click', switchMode);
closeButtonLast.addEventListener('click', switchMode);
closeButtontext.addEventListener('click', switchMode);
