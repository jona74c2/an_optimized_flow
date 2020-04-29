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
    console.log(video);
    video.src = videoSource.desktop;
    videocontainer.load();
    //videocontainer.setAttribute('poster', newposter); //Changes video poster image
    videocontainer.play();
    console.log(videoSource.desktop);
    console.log(video);
  } else {
    video.src = videoSource.mobile;
  }
}
