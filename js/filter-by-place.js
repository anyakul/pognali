/* 'use strict';
var filterWrapper = document.querySelector('.filter-by-place');
var filterButtons = document.querySelectorAll('.filter-by-place__button');

var switchMode = function () {
  if (filterWrapper.classList.contains('filter-by-place--opened')) {
    filterWrapper.classList.remove('filter-by-place--opened');
  } else {
    filterWrapper.classList.add('filter-by-place--opened');
  }
};

for (var filterButton of filterButtons) {
  filterButton.addEventListener('click', switchMode);
}
*/
