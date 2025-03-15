async function setupOffscreen() {
    if (await chrome.offscreen.hasDocument()) return;
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Play audio for extension functionality'
    });
  }
  
  async function playAudio(url) {
    await setupOffscreen();
    chrome.runtime.sendMessage({ action: 'play', url });
  }
  
  // Example usage:
  chrome.action.onClicked.addListener(() => playAudio('notification.mp3'));