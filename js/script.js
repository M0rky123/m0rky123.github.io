import { database } from "./database.js";

console.log(database);

const songTitleContainer = document.querySelector(".song");
const songTitle = document.querySelector(".song > :first-child");
if (songTitle.clientWidth > songTitleContainer.clientWidth) {
  songTitle.classList.toggle("titleLonger");
}

console.log(songTitle);
console.log(songTitleContainer);
