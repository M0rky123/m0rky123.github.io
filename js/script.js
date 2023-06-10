import { database } from "./database.js";

//VARIABLES - music player
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const title = document.getElementById("songTitle");
const author = document.getElementById("songAuthor");
const cover = document.getElementById("song-cover");
const timestamp = document.getElementById("timestamp");
let playing = false;
let song = new Audio();

//VARIABLES - volume
let volume = document.getElementById("volumeInput");
let volumeImg = document.getElementById("volumeImg");
let volumeHolder;
let muted = false;

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
      songPlay(song, artist);
    });
    songContainer.appendChild(button);
    songCard.appendChild(songContainer);
  }

  document.querySelector(".page-content").appendChild(songCard);
}

// MARQUEE
function marquee() {
  const songTitleContainer = document.querySelector(".song");
  const songTitle = document.getElementById("songTitle");
  if (songTitle.clientWidth > songTitleContainer.clientWidth) {
    songTitle.classList.add("titleLonger");
  } else {
    songTitle.classList.remove("titleLonger");
  }
}

// VOLUME
volume.addEventListener("input", () => {
  volumeValue();
  volumeHolder = volume.value;
  song.volume = volumeHolder / 100;
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
  song.volume = volumeHolder / 100;
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
prev.addEventListener("click", () => {});
next.addEventListener("click", () => {});
play.addEventListener("click", () => {
  songPlayStop();
});

function songPlay(audio, singer) {
  volumeHolder = volume.value;
  song.load(audio.mp3);
  song = new Audio(audio.mp3);
  song.volume = volumeHolder / 100;
  playing = false;
  songPlayStop();
  cover.src = audio.jpg;
  title.textContent = audio.song;
  author.textContent = singer.singer;
  marquee();
  timestampMax();
  audioDuration();
}

function songPlayStop() {
  if (playing === false) {
    song.play();
    play.src = "./imgs/icons/pause.svg";
    playing = true;
  } else {
    song.pause();
    play.src = "./imgs/icons/play.svg";
    playing = false;
  }
}

function timestampMax() {
  let intervalID = setInterval(function timestampMax() {
    if (song.duration) {
      timestamp.max = song.duration;
      document.querySelector(".timestamp > div > span:last-of-type").textContent = formatujCas(song.duration);
      clearInterval(intervalID);
    }
  }, 500);
}

timestamp.addEventListener("input", () => {
  song.currentTime = timestamp.value;
});

function audioDuration() {
  timestamp.value = song.currentTime;
  document.querySelector(".timestamp > div > span:first-of-type").textContent = formatujCas(song.currentTime);
  setTimeout(audioDuration, 1);
}

function formatujCas(cas) {
  let minuty = Math.floor(Math.floor(cas) / 60);
  let sekundy = Math.floor(Math.floor(cas) % 60) < 10 ? `0${Math.floor(Math.floor(cas) % 60)}` : Math.floor(Math.floor(cas) % 60);
  return `${minuty}:${sekundy}`;
}
