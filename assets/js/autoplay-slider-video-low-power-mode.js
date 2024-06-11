sliderBackgroundVideo = document.getElementById("slider-background-video");
function autoplay(){
  sliderBackgroundVideo.play();
}
window.onload = autoplay;
window.ontouchstart = autoplay;
