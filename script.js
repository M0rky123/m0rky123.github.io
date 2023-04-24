// SONG ARRAY
const songs = [
  { song: "Crossroad", author: "Robert Johnson", img: "./songs/blues/crossroad.jpg", audio: "./songs/blues/crossroad.mp3" },
  { song: "Dust My Broom", author: "Elmore James", img: "./songs/blues/dustmybroom.jpg", audio: "./songs/blues/dustmybroom.jpg" },
  { song: "The Thrill Is Gone", author: "B.B.King", img: "./songs/blues/thethrillisgone.jpg", audio: "./songs/blues/thethrillisgone.mp3" },
  { song: "Für Elise", author: "Ludwig van Beethoven", img: "./songs/classical/fürelise.jpg", audio: "./songs/classical/fürelise.mp3" },
  { song: "Moonlight Sonata", author: "Ludwig van Beethoven", img: "./songs/classical/moonlightsonata.jpg", audio: "./songs/classical/moonlightsonata.mp3" },
  {
    song: "Ride of the Valkyries",
    author: "Richard Wagner",
    img: "./songs/classical/rideofthevalkyries.jpg",
    audio: "./songs/classical/rideofthevalkyries.mp3",
  },
  { song: "Closer", author: "The Chainsmokers", img: "./songs/edm/closer.jpg", audio: "./songs/edm/closer.mp3" },
  { song: "Levels", author: "Avicii", img: "./songs/edm/levels.jpg", audio: "./songs/edm/levels.mp3" },
  { song: "Silence", author: "Marshmello ft. Khalid", img: "./songs/edm/silence.jpg", audio: "./songs/edm/silence.mp3" },
  { song: "Friends In Low Places", author: "Garth Brooks", img: "./songs/hiphop/friendsinlowplaces.jpg", audio: "./songs/hiphop/friendsinlowplaces.mp3" },
  { song: "I Will Always Love You", author: "Dolly Patron", img: "./songs/hiphop/iwillalwaysloveyou.jpg", audio: "./songs/hiphop/iwillalwaysloveyou.mp3" },
  { song: "The Gambler", author: "Kenny Rogers", img: "./songs/hiphop/thegambler.jpg", audio: "./songs/hiphop/thegambler.mp3" },
  { song: "Sing, Sing, Sing", author: "Benny Goodman", img: "./songs/jazz/singsingsing.jpg", audio: "./songs/jazz/singsingsing.mp3" },
  { song: "Take Five", author: "Dave Brubeck", img: "./songs/jazz/takefive.jpg", audio: "./songs/jazz/takefive.mp3" },
  { song: "Take the 'A' Train", author: "Duke Ellington", img: "./songs/jazz/taketheatrain.jpg", audio: "./songs/jazz/taketheatrain.mp3" },
  { song: "Bag Guy", author: "Billie Eilish", img: "./songs/pop/badguy.jpg", audio: "./songs/pop/badguy.mp3" },
  { song: "Billie Jeans", author: "Michael Jackson", img: "./songs/pop/billiejeans.jpg", audio: "./songs/pop/billiejeans.mp3" },
  { song: "Shape Of You", author: "Ed Sheeran", img: "./songs/pop/shapeofyou.jpg", audio: "./songs/pop/shapeofyou.mp3" },
  { song: "My Girl", author: "The Temptations", img: "./songs/r&b/mygirl.jpg", audio: "./songs/r&b/mygirl.mp3" },
  { song: "Recpect", author: "Aretha Franklin", img: "./songs/r&b/respect.jpg", audio: "./songs/r&b/respect.mp3" },
  {
    song: "I Heard It Through the Grapevine",
    author: "Marvin Gaye",
    img: "./songs/r&b/ihearditthroughthegrapevine.jpg",
    audio: "./songs/r&b/ihearditthroughthegrapevine.mp3",
  },
  { song: "Get Up, Stand Up", author: "Bob Marley", img: "./songs/reggae/getupstandup.jpg", audio: "./songs/reggae/getupstandup.mp3" },
  { song: "No Woman, No Cry", author: "Bob Marley", img: "./songs/reggae/nowomannocry.jpg", audio: "./songs/reggae/nowomannocry.mp3" },
  { song: "Stir It Up", author: "Bob Marley", img: "./songs/reggae/stiritup.jpg", audio: "./songs/reggae/stiritup.mp3" },
  { song: "Hotel California", author: "The Eagles", img: "./songs/rock/hotelcalifornia.jpg", audio: "./songs/rock/hotelcalifornia.mp3" },
  { song: "Bohemian Rhapsody", author: "Queen", img: "./songs/rock/bohemianrhapsody.jpg", audio: "./songs/rock/bohemianrhapsody.mp3" },
  { song: "Sweet Child O' Mine", author: "Guns N' Roses", img: "./songs/rock/sweetchildomine.jpg", audio: "./songs/rock/sweetchildomine.mp3" },
];

// VARIABLES
const back = document.getElementById("back");
const play = document.getElementById("play");
const next = document.getElementById("next");
let timestamp = document.getElementById("timestamp");
let song = new Audio();
let playing = false;

let topTenCards = [
  document.querySelector(".song1"),
  document.querySelector(".song2"),
  document.querySelector(".song3"),
  document.querySelector(".song4"),
  document.querySelector(".song5"),
  document.querySelector(".song6"),
  document.querySelector(".song7"),
  document.querySelector(".song8"),
  document.querySelector(".song9"),
  document.querySelector(".song10"),
];

let volume = document.getElementById("volume");
let volumeImg = document.getElementById("volumeImg");
let volumeHolder;
let muted = false;

// TOP 10
window.addEventListener("load", topTenSongs());

function topTenSongs() {
  let arraycache = shuffle(songs);
  for (let i = 0; i < topTenCards.length; i++) {
    topTenCards[i].children[0].children[0].src = arraycache[i].img;
    topTenCards[i].children[0].children[1].onclick = function () {
      playTopTen(arraycache[i].audio);
    };
    topTenCards[i].children[1].children[0].textContent = arraycache[i].song;
    topTenCards[i].children[1].children[1].textContent = arraycache[i].author;
    if (topTenCards[i].children[1].children[0].textContent.length > 22) {
      topTenCards[i].children[1].children[0].classList.add("balance");
    } else {
      topTenCards[i].children[1].children[0].classList.remove("balance");
    }
  }
}

function playTopTen(audio) {
  song.load();
  song = new Audio(audio);
  song.play();
  play.src = "./imgs/svg/pause-circle.svg";
  playing = true;
}

// Vypůjčeno ze stackoverflow :^)
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// VOLUME CONTROL

volume.addEventListener("input", () => {
  volumeValue();
  volumeHolder = volume.value;
  if (muted) {
    muted = false;
  }
});

function volumeValue() {
  if (volume.value >= 66) {
    volumeImg.src = "./imgs/svg/volume-high.svg";
  } else if (volume.value >= 33) {
    volumeImg.src = "./imgs/svg/volume-medium.svg";
  } else if (volume.value >= 1) {
    volumeImg.src = "./imgs/svg/volume-low.svg";
  } else {
    volumeImg.src = "./imgs/svg/volume-off.svg";
  }
}

volume.addEventListener("input", () => {
  song.volume = volume.value / 100;
});

volumeImg.addEventListener("click", () => {
  if (muted === false) {
    volumeHolder = volume.value;
    volume.value = 0;
    volumeImg.src = "./imgs/svg/volume-off.svg";
    muted = true;
  } else {
    volume.value = volumeHolder;
    volumeValue();
    muted = false;
  }
});

// MUSIC PLAYER

back.addEventListener("click", () => {});
next.addEventListener("click", () => {});
play.addEventListener("click", () => {
  songPlayStop();
});

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

timestamp.addEventListener("click", () => {
  song.currentTime = timestamp.value;
});

// QUEUE
