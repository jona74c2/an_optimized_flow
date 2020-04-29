"use strict";
window.addEventListener("DOMContentLoaded", start);

const videoSource = {
  mobile: "static/dxcmobile.mp4",
  square: "static/dxcsquare.mp4",
  desktop: "static/dxcdesktop.mp4",
};

function start() {
  let video = document.querySelector("#splashvid source");
  if (window.screen.width > 900) {
    video.src = videoSource.desktop;
  } else {
    video.src = videoSource.mobile;
  }
}
