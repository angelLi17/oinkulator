chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'play') {
      const audio = new Audio(msg.url);
      audio.play();
      audio.onended = () => chrome.runtime.sendMessage({ action: 'audio-ended' });
    }
<<<<<<< HEAD
});
=======
  });
>>>>>>> 30c2ab4a39bddb22a9bef6526f7ab7f6a6b5219c
