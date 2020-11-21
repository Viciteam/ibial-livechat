document.addEventListener('DOMContentLoaded', function(e) {

	const showBtn = document.getElementById('popup-interface-btn'),

		  chatContainer = document.getElementById('chat-widget-interface'),

		  close = document.getElementById('hide-btn');

	showBtn.addEventListener('click', () => {
		chatContainer.classList.add('show');
		showBtn.parentElement.classList.add('hide');
	});

	close.addEventListener('click', () => {
		chatContainer.classList.remove('show');
		showBtn.parentElement.classList.remove('hide');
	});

});