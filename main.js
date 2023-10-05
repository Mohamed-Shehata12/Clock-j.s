function clockTime() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var timeOut = document.getElementById("clock");
  var timeZone = "AM";
  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    var timeZone = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = `${hours}  : ${minutes} : ${seconds} ${timeZone}`;
  timeOut.innerHTML = time;
  setTimeout(clockTime, 1000);
}
clockTime();
