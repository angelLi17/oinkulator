const audio = new Audio("assets/pig.mp3");
const button = document.getElementById("playSoundButton");
button.addEventListener("click", () => {
    const timesToPlay = Math.floor(Math.random() * 5) + 1;
  
    let playCount = 0;

    audio.play();
  });