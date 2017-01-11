var watchID = null;

//eventListener is added to check if the accelerometer is connected
function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	startWatch();
}

function startWatch(){
	var options = {frequency:1000}; // Show value every second
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch(){
	if(watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

function onSuccess(acceleration) {
	//Store sensor values
	var accX = acceleration.x;
	var accY = acceleration.y;
	var accZ = acceleration.z;
	
	var timestamp = acceleration.timestamp;
	//Print values to div accelerometer
	document.getElementById("accelerometer").innerHTML = 'Acceleration X: ' + accX + '<br/>' +
	'Acceleration Y: ' + accY + '<br/>' +
	'Acceleration Z: ' + accZ + '<br/>';
}

function onError(){
	alert('onError!');
}