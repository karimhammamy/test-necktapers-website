sliderBackgroundVideo = document.getElementById("slider-background-video");
function autoplay(){
  sliderBackgroundVideo.play();
}
window.ontouchstart = autoplay;
