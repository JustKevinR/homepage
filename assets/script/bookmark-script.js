const homeBTN = document.getElementById("home");
const homeBookmarks = document.getElementById("bookmarks-home-layout");
const worldBTN = document.getElementById("world");
const worldBookmarks = document.getElementById("bookmarks-world-layout");
const yearDiv = document.getElementById("year");
const monthDiv = document.getElementById("month");
const dateDiv = document.getElementById("date");
const hrsDiv = document.getElementById("hrs");
const minDiv = document.getElementById("min");

var today = new Date();

yearDiv.innerHTML = today.getFullYear();
monthDiv.innerHTML = today.getMonth() + 1;
dateDiv.innerHTML = today.getDate();
hrsDiv.innerHTML = today.getHours();
minDiv.innerHTML = today.getMinutes();

homeBTN.addEventListener("click", () => {
  const homeIcon = document.getElementById("bookmark-home-icon");
  const worldIcon = document.getElementById("bookmark-world-icon");

  if (worldBookmarks.style.display === "block") {
    worldBookmarks.style.display = "none";
    worldIcon.style.color = "wheat";
  }
  if (homeBookmarks.style.display === "none") {
    homeBookmarks.style.display = "block";
    homeIcon.style.color = "#ffa000";
  } else {
    homeBookmarks.style.display = "none";
    homeIcon.style.color = "wheat";
  }
});

worldBTN.addEventListener("click", () => {
  const worldIcon = document.getElementById("bookmark-world-icon");
  const homeIcon = document.getElementById("bookmark-home-icon");

  if (homeBookmarks.style.display === "block") {
    homeBookmarks.style.display = "none";
    homeIcon.style.color = "wheat";
  }
  if (worldBookmarks.style.display === "none") {
    worldBookmarks.style.display = "block";
    worldIcon.style.color = "#ffa000";
  } else {
    worldBookmarks.style.display = "none";
    worldIcon.style.color = "wheat";
  }
});
