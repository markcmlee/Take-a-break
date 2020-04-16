'use strict';

// The function below will make the alarm pop up on the screen
function setAlarm(event) {
    let minutes = parseFloat(event.target.value); // Just in case make it a float 
    chrome.browserAction.setBadgeText({text: 'ON'}); // To indicate the alarm is on
    chrome.alarms.create({delayInMinutes: minutes});
    chrome.storage.sync.set({minutes: minutes});
    window.close();
}

// This 'should' make the alarm stop
const clearAlarm = () => {
    chrome.browserAction.setBadgeText({text: ""});
    chrome.alarms.clearAll();
    window.close();
}

document.getElementById('testTimer').addEventListener('click', setAlarm);
document.getElementById('startTimer').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);




// "content_scripts": [
//     {
//       "matches": [
//         "<all_urls>"
//       ],
//       "js": ["content.js"]
//     }
//   ],