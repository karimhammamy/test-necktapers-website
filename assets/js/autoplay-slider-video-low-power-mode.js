sliderBackgroundVideo = document.getElementById("slider-background-video");
function checkVideoStatus(){
  if(sliderBackgroundVideo.paused =true){
    sliderBackgroundVideo.style.display = "none";
  }

}

function autoplay(){
  sliderBackgroundVideo.play();
  sliderBackgroundVideo.style.display = "inline";
}
window.onload = autoplay;
window.ontouchstart = autoplay;
