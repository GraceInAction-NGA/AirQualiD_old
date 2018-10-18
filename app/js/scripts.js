var day = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayOfWeek").innerHTML = days[day.getDay()];

var month = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("monthDate").innerHTML = months[month.getMonth()];

var d = new Date();
document.getElementById("date").innerHTML = d.getDate();
