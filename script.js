const audio = new Audio("assets/pig.mp3");
const button = document.getElementById("playSoundButton");
button.addEventListener("click", () => {
    audio.play();
  });