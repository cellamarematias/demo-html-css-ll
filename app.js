(async () => {
	// create and show the notification
	const showNotification = () => {
			// create a new notification
			const notification = new Notification('', {
					body: '',
					icon: 'wsp.png'
			});

			let audio = new Audio('audio.mp3');
			audio.play();
			// close the notification after 10 seconds
			setTimeout(() => {
					notification.close();
			}, 10 * 1000);

			setTimeout(() => {
				location.reload();
		}, 20 * 1000);

			// navigate to a URL when clicked
			notification.addEventListener('click', () => {
				location.reload();
			});
	}

	// show an error message
	const showError = () => {
			const error = document.querySelector('.error');
			error.style.display = 'block';
			error.textContent = 'You blocked the notifications';
	}

	// check notification permission
	let granted = false;

	if (Notification.permission === 'granted') {
			granted = true;
	} else if (Notification.permission !== 'denied') {
			let permission = await Notification.requestPermission();
			granted = permission === 'granted' ? true : false;
	}

	// show notification or error
	granted ? setTimeout(() => {
		showNotification();
}, 420000) : showError();



})();