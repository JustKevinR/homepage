const hrsDiv = document.getElementById("hrs");
const minDiv = document.getElementById("min");
const weekdayDiv = document.getElementById("weekday");
const dateDiv = document.getElementById("date");
const monthDiv = document.getElementById("month");


var today = new Date();

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var day = days[today.getDay()];
var month = months[today.getMonth()];

hrsDiv.innerHTML = today.getHours();
minDiv.innerHTML = today.getMinutes();
weekdayDiv.innerHTML = day;
dateDiv.innerHTML = today.getDate();
monthDiv.innerHTML = month;
