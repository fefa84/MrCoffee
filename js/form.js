

const form = document.querySelector('.form');
const surname = document.getElementById('surname');
const firstName = document.getElementById('firstName');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const surnameValue = surname.value.trim();
    const firstNameValue = firstName.value.trim();
	const telephoneValue = telephone.value.trim();
	const emailValue = email.value.trim();
    const textareaValue = textarea.value.trim();
	const regExName = /([^A-Za-z ])/g;
    const regExTel = /([^0-9])/g;
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(surnameValue === '') {
		setErrorFor(surname, 'Nom cannot be blank');
	} else if (surnameValue.length < 3 || regExName.test(surname)){
        setErrorFor(surname, 'Please correct your surname')
	}

    if(firstNameValue === '') {
		setErrorFor(firstName, 'Prénom cannot be blank');
	} else if (firstNameValue.length < 3 || regExName.test(firstName)){
        setErrorFor(firstName, 'Please correct your first name')
	}

    if(telephoneValue.length < 9 || regExTel.test(telephone)) {
		setErrorFor(telephone, 'Please correct your surname');
	} 

	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (regExEmail.test(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} 
	
	if(textarea === '') {
		setErrorFor(textarea, 'Message cannot be blank');
    } else if (textareaValue.length>1000) {
		setErrorFor(textarea, 'Message is too long(max.1000)');
	
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error-message');
	formControl.className = 'error-message';
	small.innerText = message;
}
	
const submit = document.querySelector('.button__submit');
const close = document.querySelector('.button__submit--close')
const overlay = document.querySelector('.overlay');

submit.addEventListener('click', (e) => {
    const box = document.querySelector('.box')
    box.classList.add('box__active')
    overlay.classList.add('overlay__active')
});

close.addEventListener('click', (e) => {
    const box = document.querySelector('.box')
    box.classList.remove('box__active')
    overlay.classList.remove('overlay__active')
});

