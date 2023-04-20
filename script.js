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
  { song: "Friends In Low Places", author: "Garth Brooks", img: "./songs/hiphop/friendsinlowplaces.jpg", audio: "./songs/hiphop/.mp3" },
  { song: "I Will Always Love You", author: "Dolly Patron", img: "./songs/hiphop/iwillalwaysloveyou.jpg", audio: "./songs/hiphop/iwillalwaysloveyou.mp3" },
  { song: "The Gambler", author: "Kenny Rogers", img: "./songs/hiphop/thegambler.jpg", audio: "./songs/hiphop/thegambler.mp3" },
  { song: "Sing, Sing, Sing", author: "Benny Goodman", img: "./songs/hiphop/singsingsing.jpg", audio: "./songs/hiphop/singsingsing.mp3" },
  { song: "Take Five", author: "Dave Brubeck", img: "./songs/hiphop/takefive.jpg", audio: "./songs/hiphop/takefive.mp3" },
  { song: "Take the 'A' Train", author: "Duke Ellington", img: "./songs/hiphop/.jpg", audio: "./songs/hiphop/.mp3" },
  { song: "Bag Guy", author: "Billie Eilish", img: "./songs/hiphop/.jpg", audio: "./songs/hiphop/badguy.mp3" },
  { song: "Billie Jeans", author: "Michael Jackson", img: "./songs/hiphop/.jpg", audio: "./songs/hiphop/billiejeans.mp3" },
  { song: "Shape Of You", author: "Ed Sheeran", img: "./songs/hiphop/.jpg", audio: "./songs/hiphop/shapeofyou.mp3" },
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

// TOP 10 RANDOMIZER

let topSongsArray = songs;
let randomNum = Math.ceil(Math.random() * 27);
let topTenCards = [
  document.querySelector(".card1"),
  document.querySelector(".card2"),
  document.querySelector(".card3"),
  document.querySelector(".card4"),
  document.querySelector(".card5"),
  document.querySelector(".card6"),
  document.querySelector(".card7"),
  document.querySelector(".card8"),
  document.querySelector(".card9"),
  document.querySelector(".card10"),
];

// VOLUME CONTROL
let volume = document.getElementById("volume");
let volumeImg = document.getElementById("volumeImg");
const page = window.location.pathname.split("/").pop();

volume.addEventListener("input", () => {
  console.log(volume.value);
  if (volume.value >= 66) {
    volumeImg.src = "./imgs/svg/volume-high.svg";
  } else if (volume.value >= 33 && volume.value < 66) {
    volumeImg.src = "./imgs/svg/volume-medium.svg";
  } else if (volume.value >= 1 && volume.value < 33) {
    volumeImg.src = "./imgs/svg/volume-low.svg";
  } else {
    volumeImg.src = "./imgs/svg/volume-off.svg";
  }
});
