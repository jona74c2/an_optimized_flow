"use strict";
window.addEventListener("DOMContentLoaded", start);

const videoSource = {
  mobile: "/dxcmobile.mp4",
  square: "/dxcsquare.mp4",
  desktop: "/dxcdesktop.mp4",
};

function start() {
  let video = document.querySelector("#splashvid source");
  let videocontainer = document.querySelector("#splashvid");
  if (window.screen.width > 900) {
    video.src = videoSource.desktop;
    videocontainer.load();
    videocontainer.play();
  } else {
    video.src = videoSource.mobile;
    videocontainer.load();
    videocontainer.play();
  }
}
