import throttle from 'lodash.throttle';
// let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    let pauseTime = currentTime.seconds;

    console.log(pauseTime);
    localStorage.setItem('videoplayer-current-time', pauseTime);
  }, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
  console.log(seconds);
});
