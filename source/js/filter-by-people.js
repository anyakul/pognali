/* 'use strict';

var formGroups = document.querySelectorAll('.filter-by-people__form-group');
var formButtons = document.querySelectorAll('.filter-by-people__form-legend');

  var renderCard = function (ad) {
    for (var formGroup of formGroups) {
      if (formGroup.classList.contains('filter-by-people__form-group--active')) {
              formGroup.classList.remove('filter-by-people__form-group--active');
              formGroup.classList.add('filter-by-people__form-group--closed');
            } else {
            formGroup.classList.remove('filter-by-people__form-group--closed');
            formGroup.classList.add('filter-by-people__form-group--active');
            }
    }
  };

  for (var formButton of formButtons) {
    formButton.addEventListener('click', renderCard)
  };


for (var formButton of formButtons) {
      addEventListener('click', function () {
        for (var formGroup of formGroups) {
          if (formGroup.classList.contains('filter-by-people__form-group--active')) {
            formGroup.classList.remove('filter-by-people__form-group--active');
            formGroup.classList.add('filter-by-people__form-group--closed');
          } else {
          formGroup.classList.remove('filter-by-people__form-group--closed');
          formGroup.classList.add('filter-by-people__form-group--active');
          }
        }
  })
}
console.log(formGroups);
console.log(formButton);*/
