var sliderBackgroundVideo = document.getElementById("slider-background-video");
var promise = sliderBackgroundVideo.play();
  if(promise !== undefined){
    promise.catch(error => {
      //Auto-play was prevented
      //Show a UI element to let the user manually start playback
      if (error.name === "NotAllowedError"){
        console.log("Low Power Mode Active");
        sliderBackgroundVideo.remove();
      }
    })
    sliderBackgroundVideo.style.display = "inline";
  }
  else{
    sliderBackgroundVideo.play();
  }

function autoplay(){
  sliderBackgroundVideo.play();
  sliderBackgroundVideo.style.display = "inline";
}
window.onload = autoplay;
window.ontouchstart = autoplay;
