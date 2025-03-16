const audio = new Audio("assets/pig.mp3");
const button = document.getElementById("playSoundButton");
button.addEventListener("click", () => {
    const timesToPlay = Math.floor(Math.random() * 5) + 1;
  
    let playCount = 0;

    audio.play();
    playCount++;

    if (playCount < timesToPlay) {
    // Wait for the audio to finish before playing again
    audio.onended = playAudio;
    } else {
      // Reset onended event after all plays are done
      audio.onended = null;
    }
  });