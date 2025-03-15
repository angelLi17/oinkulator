chrome.scripting.registerContentScripts([{
    id: "myContentScript",
    matches: ["chrome-extension://<your-extension-id>/*"],
    js: ["your-content-script.js"],
    runAt: "document_idle"
  }]);