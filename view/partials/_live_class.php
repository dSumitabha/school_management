<div class="live">
    <img src="res/livemeeting.webp" style="width:100%"/>
</div>
<div class="meeting-list">
    <div class="time-box">
        <h2 ><span id="hour"></span>:<span id="minute"></span></h2>
        <h4 id="date"></h4>
        <button>&#x25CF;  JOIN NOW</button>
    </div>
    <ul>
        <li>All Meetings</li>
        <li>Today</li>
        <li>Tommorrow</li>
    </ul>
    <img src="res/liveclass.png" style="width:25rem"/>
    <h6>NO MEETINGS FOUND</h6>
</div>
<script>
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
</script>