"use strict";

const titleContain = document.querySelector(".titleAndButton");
const videotitle = document.querySelector(".videotitle");
const moreBtn = titleContain.querySelector("button");
const toolsicon = document.querySelector(".video-tools");
const subscribe = document.querySelector(".subscribeicon");

function handletoolsicon(e) {
  let target = e.target;

  while (!target.classList.contains("video-tools")) {
    if (target.classList.contains("buttons")) {
      const icon = target.querySelector("i");
      icon.classList.toggle("active");
      break;
    } else {
      target = target.parentNode;
    }
  }
}

function handlemoretoggle() {
  videotitle.classList.toggle("more");
}

function handlesubscribe() {
  subscribe.classList.toggle("subscribed");
}

function init() {
  moreBtn.addEventListener("click", handlemoretoggle);
  subscribe.addEventListener("click", handlesubscribe);
  toolsicon.addEventListener("click", handletoolsicon);
}

init();
