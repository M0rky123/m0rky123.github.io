import { database } from "./database.js";

let song = new Audio();
for (const key in database) {
  const artist = database[key][0];
  const songCard = document.createElement("div");
  songCard.classList.add("song-card");
  songCard.innerHTML += `<img src="${artist.picture}" alt="artist-cover" width="100px" height="100px">`;
  songCard.innerHTML += `<h3>Zpěvák: ${artist.singer}</h3>`;
  for (let i = 1; i < database[key].length; i++) {
    const song = database[key][i];
    const songContainer = document.createElement("div");
    songContainer.classList.add("song");
    songContainer.innerHTML += `<img src="${song.jpg}" alt="artist-cover" width="50px" height="50px">`;
    songContainer.innerHTML += `Píseň: ${song.song}`;
    const button = document.createElement("button");
    button.textContent = "Play";
    button.addEventListener("click", () => {
      playSong(song.mp3);
    });
    songContainer.appendChild(button);
    songCard.appendChild(songContainer);
  }

  document.querySelector(".page-content").appendChild(songCard);
}

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
// let song = new Audio();
let playing = false;

prev.addEventListener("click", () => {});
next.addEventListener("click", () => {});
play.addEventListener("click", () => {
  songPlayStop();
});

function playSong(audio) {
  song = new Audio(audio);
  song.play();
  console.log("funguju");
}

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
