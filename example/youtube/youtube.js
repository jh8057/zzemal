"use strict";

const titleContain = document.querySelector(".titleAndButton");
const videotitle = document.querySelector(".videotitle");
const moreBtn = titleContain.querySelector("button");
const toolsicon = document.querySelector(".video-tools");
const subscribe = document.querySelector(".subscribeicon");

function handletoolsicon(e) {
  console.log(e.target);
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
  // toolsicon.addEventListener("click", handletoolsicon);
}

init();
