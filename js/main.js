let editButton = document.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileUser = document.querySelector('.profile__user-name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.form');
let profileInputName = document.querySelector('.form__input_el_title');
let profileInputSubName = document.querySelector('.form__input_el_subtitle');

function popupOpened(){
  popupWindow.classList.add('popup_opened');
}

function popupClosed(){
  popupWindow.classList.remove('popup_opened');
}

function profileEdit(){
  profileInputName.value = profileUser.textContent;
  profileInputSubName.value = profileDescription.textContent;
	popupOpened();
}

function handleFormSubmit(evt){
  evt.preventDefault();
	profileUser.textContent 			 = profileInputName.value;
  profileDescription.textContent = profileInputSubName.value;
	popupClosed();
}

editButton.addEventListener('click', profileEdit);

popupCloseButton.addEventListener('click', popupClosed);

formElement.addEventListener('submit', handleFormSubmit);
