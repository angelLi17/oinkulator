const audio = new Audio("assets/pig.mp3");
const button = document.getElementById("playSoundButton");
button.addEventListener("click", () => {
    playAudio(audio, Math.floor(Math.random() % 5) + 1);
  });

  function playAudio(file, times) {
    let count = 0;

    // Play the audio and repeat it the specified number of times
    audio.addEventListener("ended", () => {
        count++;
        if (count < times) {
            audio.currentTime = 0; // Reset playback time
            audio.play();
        }
    });
}