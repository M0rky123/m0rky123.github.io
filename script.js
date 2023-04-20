let volume = document.getElementById("volume");
let volumeImg = document.getElementById("volumeImg");
const page = window.location.pathname.split("/").pop();

volume.addEventListener("input", () => {
  console.log(volume.value);
  if (volume.value >= 66) {
    if (page != "") {
      volumeImg.src = "../imgs/svg/volume-high.svg";
    } else {
      volumeImg.src = "./imgs/svg/volume-high.svg";
    }
  } else if (volume.value >= 33 && volume.value < 66) {
    if (page != "") {
      volumeImg.src = "../imgs/svg/volume-medium.svg";
    } else {
      volumeImg.src = "./imgs/svg/volume-medium.svg";
    }
  } else if (volume.value >= 1 && volume.value < 33) {
    if (page != "") {
      volumeImg.src = "../imgs/svg/volume-low.svg";
    } else {
      volumeImg.src = "./imgs/svg/volume-low.svg";
    }
  } else {
    if (page != "") {
      volumeImg.src = "../imgs/svg/volume-off.svg";
    } else {
      volumeImg.src = "./imgs/svg/volume-off.svg";
    }
  }
});
