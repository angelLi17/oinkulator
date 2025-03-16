<<<<<<< HEAD
importScripts('script.js');
=======
import './sw-omnibox.js';

console.log("sw-omnibox.js");

function getTabId() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    callback(tabs[0].id);
  });
}

chrome.scripting
    .executeScript({
      target : {tabId : getTabId()},
      files : [ "script.js" ],
    })
    .then(() => console.log("injected script file"));

document.getElementById("1").addEventListener("click", display(1));
document.getElementById("2").addEventListener("click", display(2));
document.getElementById("3").addEventListener("click", display(3));
document.getElementById("4").addEventListener("click", display(4));
document.getElementById("5").addEventListener("click", display(5));
document.getElementById("6").addEventListener("click", display(6));
document.getElementById("7").addEventListener("click", display(7));
document.getElementById("8").addEventListener("click", display(8));
document.getElementById("9").addEventListener("click", display(9));
document.getElementById("0").addEventListener("click", display(0));

function display(a) {
    document.getElementById("space1").innerHTML = a;
}
>>>>>>> a4d75379bac3e4ce23faefcca9acba8cbf1d4e4a
