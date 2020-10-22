
const launchDate = new Date("Nov 15, 2020 00:00:00").getTime();
console.log(launchDate);

const x = setInterval(function() {

	const currentTime = new Date().getTime();

	const timeUntilLaunch = (launchDate - currentTime);

  //Take displayNumber in miliseconds and convert to days 
	var days = Math.floor(timeUntilLaunch / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeUntilLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeUntilLaunch % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeUntilLaunch % (1000 * 60)) / 1000);


  console.log('days = '  + days)
  console.log('hours = ' + hours)
  console.log('minutes = ' + minutes)
  console.log('seconds = ' + seconds)

  document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}, 1000);



