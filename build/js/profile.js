'use strict';

var profileButton = document.querySelector('.profile__button');
var profileButtonBusiness = document.querySelector('.profile__button-business');
var profileInfoBusiness = document.querySelector('.profile__business');

profileButton.addEventListener('click', function () {
  profileInfoBusiness.classList.remove('profile__business--closed');
  profileInfoBusiness.classList.add('profile__business--opened');
});

profileButtonBusiness.addEventListener('click', function () {
  profileInfoBusiness.classList.remove('profile__business--opened');
  profileInfoBusiness.classList.add('profile__business--closed');
});
