function getTimes() {
	var alltimes = document.getElementsByName("time");
	var timezoneselect = document.getElementById("timezoneselect");
	var i = -1;
	alltimes.forEach(function () {
		i = i + 1;
		var time = parseInt(alltimes[i]["className"], 10);
		if (time == 23) {
		alltimes[i]["innerText"] = 11 + " - " + 1 + "AM";}
		else {
		console.log(typeof(time0));
		time = time + parseInt(timezoneselect.value, 10);
		console.log(time);
		temp = time + 2;
		var tempadditive = " AM";
		if (time > 12 && time < 24) {
			time = time - 12;
		}
		if (time >= 24) {
			time = time - 24;
		}
		if (temp > 12 && temp < 24) {
			temp = temp - 12;
			tempadditive = " PM";
		}
		if (temp >= 24) {
			temp = temp - 24;
			tempadditive = " AM";
		}
		temp = temp + tempadditive;
		alltimes[i]["innerText"] = time + " - " + temp;
		}});

}