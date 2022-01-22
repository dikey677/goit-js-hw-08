import throttle from 'lodash.throttle';
// let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    let pauseTime = currentTime.seconds;

    console.log(pauseTime);
    localStorage.setItem('videoplayer-current-time', pauseTime);
  }, 1000),
);

let localeStrg = Math.floor(localStorage.getItem('videoplayer-current-time') || 0);

player.setCurrentTime(localeStrg).then(function (seconds) {
  return seconds;
});
