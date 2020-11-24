document.addEventListener('DOMContentLoaded', function(e) {

	/**
	 * Toggle Popup Widget
	 */
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

	/**
	 * Toggle Chat Options
	 * toggle between hiding and showing the chat options dropdown content
	 */
	const toggleChatOptions = document.getElementById('toggleChatOptions'),
	 	chatOptions = document.getElementById('chatOptions');

	toggleChatOptions.addEventListener('click', function(e) {
		e.stopPropagation();
		chatOptions.classList.toggle("show");
	});

	/**
	 * Close the dropdown if the user clicks outside of it
	 */
	window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("chat-dropdown-options");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
			}
		}
		}
	}

	/**
	 * toggle Mute/Unmute Chat Options
	 */
	const toggleMute = document.getElementById('toggleMute');
	toggleMute.addEventListener('click', () => {
		toggleMute.innerHTML = toggleMute.innerHTML === 'Mute' ? 'Unmute' : 'Mute';
	});

	/**
	 * show Rating Modal
	 */
	const ratingModal = document.getElementById('showRatingModal');
	ratingModal.addEventListener('click', () => {
		$("#ratingModal").modal();
	});

	/**
	 * toggle Like/Dislike Button
	 */
	const like = document.getElementById('like-button');
	const dislike = document.getElementById('dislike-button');
	const feedback = document.getElementById('ratingFeedback');

	like.addEventListener('click', () => {
		like.classList.add('primary','white--text');
		feedback.classList.toggle('show');
		dislike.classList.remove('primary','white--text');
	});

	dislike.addEventListener('click', () => {
		dislike.classList.add('primary','white--text');
		feedback.classList.toggle('show');
		like.classList.remove('primary','white--text');
	});

});