chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'play') {
      const audio = new Audio(msg.url);
      audio.play();
      audio.onended = () => chrome.runtime.sendMessage({ action: 'audio-ended' });
    }
  });
