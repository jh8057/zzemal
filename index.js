function playmusic() {
  let song = document.getElementById("Theme_song");
  let icon = document.getElementById("playicon");
  if (song.paused) {
    song.play();
    icon.src = "projects/firstpage/img/pausebutton.png";
  } else {
    song.pause();
    icon.src = "projects/firstpage/img/playbutton.png";
  }
}

function showMenu() {
  let navLinks = document.getElementById("navLinks");
  navLinks.style.right = "0";
}

function hideMenu() {
  let navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
}

function countdays() {
  const date1 = new Date(2020, 12, 22);
  let date2 = new Date();

  const difftime = date2.getTime() - date1.getTime();
  const diffday = Math.trunc(difftime / 1000 / 60 / 60 / 24);

  let countday = document.getElementById("countday");
  countday.innerHTML = diffday;
}
countdays();

function scrollpage() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}
