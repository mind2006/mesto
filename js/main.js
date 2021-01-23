let editButton          = document.querySelector('.profile__edit-button'),
		popupWindow         = document.querySelector('.popup'),
		popupCloseButton    = document.querySelector('.popup__close-button'),
		profileUser         = document.querySelector('.profile__user-name'),
		profileDescription  = document.querySelector('.profile__description'),
		profileInputName    = document.querySelector('.form__input_el_title'),
		profileInputSubName = document.querySelector('.form__input_el_subtitle');

function popupOpened(){
  popupWindow.classList.add('popup__opened');
}

function popupClosed(){
  popupWindow.classList.remove('popup__opened');
}

function profileEdit(){
  profileInputName.value 		= profileUser.textContent;
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

popupWindow.addEventListener('submit', handleFormSubmit);
