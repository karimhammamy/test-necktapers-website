 sliderBackgroundVideo = document.getElementById("slider-background-video");
  videoState = sliderBackgroundVideo.paused;
  if(videoState = false){
    sliderBackgroundVideo.style.display = "inline";
  }
  else{
    sliderBackgroundVideo.style.display = "none";
  }

function autoplay(){
  sliderBackgroundVideo.play();
  sliderBackgroundVideo.style.display = "inline";
}
window.onload = autoplay;
window.ontouchstart = autoplay;
