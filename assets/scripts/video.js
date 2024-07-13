const videoPlayerButton = document.querySelector(".es-video__play-button");
const videoPlayer = document.querySelector("#es-player");

videoPlayerButton.onclick = (event) => {
  videoPlayer.play();
  videoPlayerButton.style.display = "none";
  videoPlayer.controls = "controls";
};

videoPlayer.onended = (event) => {
  videoPlayerButton.style.display = "block";
  videoPlayer.controls = "";
};
