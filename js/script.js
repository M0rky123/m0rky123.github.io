import { database } from "./database.js";

// MARQUEE
const songTitleContainer = document.querySelector(".song");
const songTitle = document.querySelector(".song > :first-child");
if (songTitle.clientWidth > songTitleContainer.clientWidth) {
  songTitle.classList.toggle("titleLonger");
}

// VOLUME
let volume = document.getElementById("volumeInput");
let volumeImg = document.getElementById("volumeImg");
let volumeHolder;
let muted = false;

volume.addEventListener("input", () => {
  volumeValue();
  volumeHolder = volume.value;
  if (muted) {
    muted = false;
  }
});

volumeImg.addEventListener("click", () => {
  if (muted === false) {
    volumeHolder = volume.value;
    volume.value = 0;
    volumeValue();
    muted = true;
  } else {
    volume.value = volumeHolder;
    volumeValue();
    muted = false;
  }
});

function volumeValue() {
  if (volume.value >= 50) {
    volumeImg.src = "./imgs/icons/volume-high.svg";
  } else if (volume.value >= 1) {
    volumeImg.src = "./imgs/icons/volume-low.svg";
  } else {
    volumeImg.src = "./imgs/icons/volume-muted.svg";
  }
}

// MUSIC PLAYER
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const cover = document.getElementById("song-cover");
const timestamp = document.getElementById("timestamp");
let song = new Audio();
let playing = false;

prev.addEventListener("click", () => {});
next.addEventListener("click", () => {});
play.addEventListener("click", () => {
  songPlayStop();
});

function songPlay(audio) {
  volumeHolder = volume.value;
  song.load();
  song = new Audio(audio.audio);
  song.volume = volumeHolder / 100;
  playing = false;
  songPlayStop();
  cover.children[0].src = audio.img;
  title.children[0].textContent = audio.song;
  title.children[1].textContent = audio.author;
  timestampMax();
  audioDuration();
}

function songPlayStop() {
  if (playing === false) {
    song.play();
    play.src = "./imgs/svg/pause-circle.svg";
    playing = true;
  } else {
    song.pause();
    play.src = "./imgs/svg/play-circle.svg";
    playing = false;
  }
}

function timestampMax() {
  let intervalID = setInterval(function timestampMax() {
    if (song.duration) {
      console.log(timestamp.max);
      console.log(song.duration);
      timestamp.max = song.duration;
      document.getElementById("timestamp2").textContent = song.duration;
      clearInterval(intervalID);
    }
  }, 500);
}

timestamp.addEventListener("input", () => {
  song.currentTime = timestamp.value;
});

function audioDuration() {
  timestamp.value = song.currentTime;
  document.getElementById("timestamp1").textContent = song.currentTime;
  setTimeout(audioDuration, 1);
}
