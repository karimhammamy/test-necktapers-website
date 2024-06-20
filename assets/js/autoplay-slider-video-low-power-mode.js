var sliderBackgroundVideo = document.getElementById("slider-background-video");
var imgFallbackForVideoErrorBgContainer = document.getElementById("img-fallback-for-video-error-bg-container-id");
var promise = sliderBackgroundVideo.play();
var timeoutId1 = setTimeout(slide1,24850);
var timeoutId2 = setTimeout(slide2,34850);
var timeoutId3 = setTimeout(slide3,44850);
var intervalId1 = setInterval(sliderAreaBehaviorOnLoad,44850);
  if(promise !== undefined){
    promise.catch(error => {
      //Auto-play was prevented
      //Show a UI element to let the user manually start playback
      if (error.name === "NotAllowedError"){
        console.log("Low Power Mode Active");
        //sliderBackgroundVideo.remove();
        //sliderBackgroundVideo.style.visibility = "hidden";
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
        clearInterval(intervalId1);
        imgFallbackForVideoErrorBgContainer.style.visibility = "visible";
        function autoplay(){
          //sliderBackgroundVideo.style.visibility = "visible";
          imgFallbackForVideoErrorBgContainer.style.visibility = "hidden";
          sliderBackgroundVideo.play();
          timeoutId1 = setTimeout(slide1,24850);
          timeoutId2 = setTimeout(slide2,34850);
          timeoutId3 = setTimeout(slide3,44850);
          intervalId1 = setInterval(sliderAreaBehaviorOnLoad,44850);
        }
        window.ontouchstart = autoplay;
      }
    })
  }
  else{
    sliderBackgroundVideo.play();
    imgFallbackForVideoErrorBgContainer.style.visibility = "hidden";
  }


