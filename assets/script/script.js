function convertH2M(timeInHour) {
  var timeParts = timeInHour.split(":");
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

var timeInMinutes = convertH2M("23:59");
console.log(timeInMinutes);

var Hours = new Date().getHours();
var Minutes = new Date().getMinutes();
var TimeinMIN = Hours * 60 + Minutes;
console.log(TimeinMIN + " time now");

const iconsINcontainer = document.querySelectorAll(".icon");
const sunRise = 530;
const sunSet = 931;
const totalTimeinMIN = 1440;
const percentageUP = 120;
const dayTotal = Math.abs(sunRise - sunSet);
const nightTotal = Math.abs(dayTotal - totalTimeinMIN);
const sunMovePM = percentageUP / dayTotal;

const TimeinMIN2 = 800;
console.log(TimeinMIN2);

if (TimeinMIN >= sunRise && TimeinMIN <= sunSet) {
  day();
  console.log("day");
} else {
  night();
  console.log("night");
}
iconsINcontainer.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.id == "home") {
      var homeNavbar = document.getElementById("main-home-navbar");
      console.log(homeNavbar);
      if (homeNavbar.style.display === "none") {
        homeNavbar.style.display = "block";
      } else {
        homeNavbar.style.display = "none";
      }
    }
  });
});
function day() {
  var dayTimeSpent = TimeinMIN - sunRise;
  var dayMoving = dayTotal / percentageUP;
  var dayMovingPM = Math.abs(dayTimeSpent / dayMoving);
  console.log(dayMovingPM + "day");
  document.getElementById("sun").style.top = 100 - dayMovingPM + "%";
}
function night() {
  var nightTimetotal = Math.abs(sunSet - totalTimeinMIN) + sunRise;
  var nightMoving = percentageUP / nightTimetotal;
  console.log(nightMoving);
  console.log(nightTimetotal);
  if (TimeinMIN <= sunRise) {
    var nightAfterBFmd = Math.abs(sunSet - totalTimeinMIN);
    var nightTimeSpent = nightAfterBFmd + TimeinMIN;
    console.log(nightTimeSpent + " nightTimeSpent");
    var nightMovingAfterBFmd = nightTimeSpent * nightMoving;
    // var nightMovingBFmd = nightMoving / nightTimeSpent;
    // console.log(nightMovingBFmd);
    document.getElementById("moon").style.top =
      100 - nightMovingAfterBFmd + "%";
    console.log(100 - nightMovingAfterBFmd);
  }
  if (TimeinMIN > sunSet && TimeinMIN <= totalTimeinMIN) {
    console.log("midnighttime");
    var nightBFsunset = Math.abs(TimeinMIN - sunSet);
    var nightBFmdmove = nightBFsunset * nightMoving;
    document.getElementById("moon").style.top = 100 - nightBFmdmove + "%";
    console.log(nightBFmdmove - 100);
  }
}
