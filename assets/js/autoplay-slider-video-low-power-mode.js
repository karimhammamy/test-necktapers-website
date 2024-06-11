Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});
sliderBackgroundVideo = document.getElementById("slider-background-video");
sliderBackgroundVideo.addEventListener('suspend', () => {
  // suspend invoked
  // show play button
});

sliderBackgroundVideo.addEventListener('play', () => {
  // video is played
  // remove play button UI
});
$('body').on('click touchstart', function () {
  const sliderBackgroundVideo = document.getElementById('home_video');
  if (sliderBackgroundVideo.playing) {
      // video is already playing so do nothing
  }
  else {
      // video is not playing
      // so play video now
      sliderBackgroundVideo.play();
  }
});
