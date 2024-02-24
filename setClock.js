function setClock() {
	const clock = new Date();
	const date = clock.toDateString()
	const hour = clock.getHours()
	const minute = clock.getMinutes()
	const hourSpace = document.getElementById('hour');
	const minuteSpace = document.getElementById('minute')
	const dateSpace = document.getElementById('date')
	hourSpace.innerHTML = hour;
	if( minute < 10) {
		minuteSpace.innerHTML = '0'+minute
	}
	else {
		minuteSpace.innerHTML = minute;
	}
	dateSpace.innerHTML = date;
}
setClock()
setInterval(setClock, 1000)