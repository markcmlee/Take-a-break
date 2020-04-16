'use strict';
// const myAudio = new Audio(chrome.runtime.getURL("path/to/file.mp3"));



chrome.alarms.onAlarm.addListener(function() {
//   myAudio.play();
  chrome.tabs.create({"url": "./relativetest.html"});
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'TakeABreakLogo.png',
      title:    'Time to take a break!',
      message:  'Stretch or Exercise',
      buttons: [
        {title: 'Back to work!'}
      ],
      priority: 0});
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.alarms.create({delayInMinutes: item.minutes});
  });
});

