let message = {
	loading: 'Загрузка...',
	success: 'Спасибо! Скоро мы с вами свяжемся!',
	failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
		input = document.querySelector('input'),
		statusMessage = document.querySelector('div');

		statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
	// event.preventDefault()
})
