import { database } from "./database.js";

// VARIABLES - music player
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const title = document.getElementById("songTitle");
const author = document.getElementById("songAuthor");
const cover = document.getElementById("song-cover");
const timestamp = document.getElementById("timestamp");
let playing = true;
let song = new Audio();

// VARIABLES - volume
const volume = document.getElementById("volumeInput");
const volumeImg = document.getElementById("volumeImg");
let volumeHolder;
let muted = false;

// VARIABLES - marquee animation
const titleContainer = document.querySelector(".song");

for (const key in database) {
  const artist = database[key][0];
  const songCard = document.createElement("div");
  songCard.classList.add("song-card");
  songCard.innerHTML += `<div class="artist"><img src="${artist.picture}" alt="artist-cover" width="100px" height="100px"><h3>${artist.singer}</h3></div>`;
  const songs = document.createElement("div");
  songs.classList.add("songs");
  for (let i = 1; i < database[key].length; i++) {
    const song = database[key][i];
    const songContainer = document.createElement("div");
    songContainer.classList.add("song");
    songContainer.innerHTML += `<img src="${song.jpg}" alt="artist-cover" width="50px" height="50px">`;
    songContainer.innerHTML += `<span>${song.song}</span>`;
    const button = document.createElement("button");
    button.innerHTML = '<img src="./imgs/favicon.ico" alt="artist-cover" width="50px" height="50px">';
    button.addEventListener("click", () => {
      songPlay(song, artist);
    });
    songContainer.appendChild(button);
    songs.appendChild(songContainer);
    songCard.appendChild(songs);
  }
  document.querySelector(".page-content").appendChild(songCard);
}

// MARQUEE
function marquee() {
  document.querySelector(":root").style.setProperty("--marquee", titleContainer.clientWidth - title.clientWidth + "px");
  title.clientWidth > titleContainer.clientWidth ? title.classList.add("titleLonger") : title.classList.remove("titleLonger");
}

// VOLUME
volume.addEventListener("input", () => {
  if (muted === true) {
    muted = false;
  }
  song.volume = volume.value / 100;
  volumeImgChanger();
});

volumeImg.addEventListener("click", () => {
  if (muted === false) {
    volumeHolder = volume.value;
    song.volume = 0;
    volume.value = 0;
    volumeImgChanger();
    muted = true;
  } else {
    volume.value = volumeHolder;
    song.volume = volumeHolder / 100;
    volumeHolder = 0;
    volumeImgChanger();
    muted = false;
  }
});

function volumeImgChanger() {
  if (volume.value >= 1) {
    volume.value >= 50 ? (volumeImg.src = "./imgs/icons/volume-high.svg") : (volumeImg.src = "./imgs/icons/volume-low.svg");
  } else {
    volumeImg.src = "./imgs/icons/volume-muted.svg";
  }
}

// MUSIC PLAYER
prev.addEventListener("click", () => {});
next.addEventListener("click", () => {});
play.addEventListener("click", () => {
  playPause();
});

function songPlay(audio, singer) {
  song.load(audio.mp3);
  song = new Audio(audio.mp3);
  song.volume = volume.value / 100;
  playing = true;
  playPause();
  songControls(audio, singer);
}

function playPause() {
  function _songPlay() {
    song.play();
    play.src = "./imgs/icons/pause.svg";
    playing = false;
  }
  function _songPause() {
    song.pause();
    play.src = "./imgs/icons/play.svg";
    playing = true;
  }
  playing ? _songPlay() : _songPause();
}

function songControls(audio, singer) {
  timestampMax();
  cover.src = audio.jpg;
  title.textContent = audio.song;
  author.textContent = singer.singer;
  audioDuration();
  marquee();
}

function timestampMax() {
  let intervalID = setInterval(function timestampMax() {
    if (song.duration) {
      timestamp.max = song.duration;
      document.querySelector(".timestamp > div > span:last-of-type").textContent = formatedTime(song.duration);
      clearInterval(intervalID);
    }
  }, 30);
}

timestamp.addEventListener("input", () => {
  song.currentTime = timestamp.value;
});

function audioDuration() {
  timestamp.value = song.currentTime;
  document.querySelector(".timestamp > div > span:first-of-type").textContent = formatedTime(song.currentTime);
  setTimeout(audioDuration, 1);
}

function formatedTime(cas) {
  let minuty = Math.floor(Math.floor(cas) / 60);
  let sekundy = Math.floor(Math.floor(cas) % 60) < 10 ? `0${Math.floor(Math.floor(cas) % 60)}` : Math.floor(Math.floor(cas) % 60);
  return `${minuty}:${sekundy}`;
}
