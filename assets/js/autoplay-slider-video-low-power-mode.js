var sliderBackgroundVideo = document.getElementById("slider-background-video");
var imgFallbackForVideoErrorBgContainer = document.getElementById("img-fallback-for-video-error-bg-container-id");
var promise = sliderBackgroundVideo.play();
function slide1(){
  slideIndicator = "gallery2";
  function slideGallery2FromNegative100To0(){
    sliderAreaSlide1.style.animation = "move2 0.5s ease-in";
    sliderAreaSlide1.style.visibility = "visible";
  };
  slideGallery2FromNegative100To0();
  setTimeout(resetVideoToStartPosition,500);


};
function slide2(){
  slideIndicator = "gallery12";
  function slideGalley2From0To100(){
    sliderAreaSlide1.style.animation = "move1 0.5s ease-out";
  };
  slideGalley2From0To100();

  function slideGalley12FromNegative100To0(){
    sliderAreaSlide2.style.animation = "move2 0.5s ease-out";
    sliderAreaSlide2.style.visibility = "visible";
  };
  slideGalley12FromNegative100To0();
  function restGallery2Visibility(){
    sliderAreaSlide1.style.visibility = "hidden";
  }
  setTimeout(restGallery2Visibility,500);
};
function slide3(){
  slideIndicator = "video";
  sliderBackgroundVideo.play();
  function slideGalley12From0To100(){
    sliderAreaSlide2.style.animation = "move1 0.5s linear";
  };
  slideGalley12From0To100();

  function restGallery12Visibility(){
    sliderAreaSlide2.style.visibility = "hidden";
  }
  setTimeout(restGallery12Visibility,500);

  

};
function sliderAreaBehaviorOnLoad(){
  setTimeout(slide1,24850);
  setTimeout(slide2,34850);
  setTimeout(slide3,44850);
}
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


