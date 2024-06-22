var a = window.matchMedia("(min-width: 1px)");
var b = window.matchMedia("(max-width: 375.9px)");
var c = window.matchMedia("(min-width: 376px)");
var d = window.matchMedia("(max-width: 425.9px)");
var e = window.matchMedia("(min-width: 426px)");
var f = window.matchMedia("(max-width: 767.9px)");
var g = window.matchMedia("(min-width: 768px)");
var h = window.matchMedia("(max-width: 1399.9px)");
var i = window.matchMedia("(min-width: 1400px)");
var j = window.matchMedia("(max-width: 1920.9px)");
var k = window.matchMedia("(min-width: 1440px)");
var l = window.matchMedia("(max-width: 2560px)");
var sliderBackgroundVideo = document.getElementById("slider-background-video");
var sliderAreaSlide1 = document.getElementById("slider-area-slide-1-id");
var sliderAreaSlide2 = document.getElementById("slider-area-slide-2-id");
var leftArrowSliderArea = document.getElementById("left-arrow-icon-id");
var rightArrowSliderArea = document.getElementById("right-arrow-icon-id");
var slideIndicator = "video";
var timeoutId1 = setTimeout(slide1,24850);
var timeoutId2 = setTimeout(slide2,34850);
var timeoutId3 = setTimeout(slide3,44850);
var intervalId1 = setInterval(sliderAreaBehaviorOnLoad,44850);
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
function slide1Left(){
  slideIndicator = "gallery12";
  function slideGalley12From0ToNegative100(){
    sliderAreaSlide2.style.visibility = "visible";
    sliderAreaSlide2.style.animation = "move3 0.5s ease-out";
    
  };
  slideGalley12From0ToNegative100();
  setTimeout(resetVideoToStartPosition,500);
};
function slide2Left(){
  slideIndicator = "video";
  sliderBackgroundVideo.play();
  function slideGalley2From0ToNegative100(){
    sliderAreaSlide1.style.animation = "move4 0.5s ease-out";
  };
  slideGalley2From0ToNegative100();
  function restGallery2Visibility(){
    sliderAreaSlide1.style.visibility = "hidden";
  }
  setTimeout(restGallery2Visibility,500);
  
};
function slide3Left(){
  slideIndicator = "gallery2";
  function slideGalley2From0ToNegative100(){
    sliderAreaSlide1.style.visibility = "visible";
    sliderAreaSlide1.style.animation = "move3 0.5s ease-out";
  };
  slideGalley2From0ToNegative100();
  function slideGalley12From100To0(){
    sliderAreaSlide2.style.animation = "move4 0.5s ease-out";
  };
  slideGalley12From100To0();
  function restGallery12Visibility(){
    sliderAreaSlide2.style.visibility = "hidden";
  };
  setTimeout(restGallery12Visibility,500);
};
function sliderAreaBehaviorOnLoad(){
  setTimeout(slide1,24850);
  setTimeout(slide2,34850);
  setTimeout(slide3,44850);
}
function case1(){
  setTimeout(slide2,10000);
  setTimeout(slide3,20000);
  setTimeout(slide1,44850);
}
function case2(){
  setTimeout(slide3,10000);
  setTimeout(slide1,34850);
  setTimeout(slide2,44850);
}
function disablePointerEvents(){
  rightArrowSliderArea.style.pointerEvents = "none";
  leftArrowSliderArea.style.pointerEvents = "none";
};
function enablePointerEvents(){
  rightArrowSliderArea.style.pointerEvents = "auto";
  leftArrowSliderArea.style.pointerEvents = "auto";
};
function resetVideoToStartPosition(){
      sliderBackgroundVideo.pause();
      sliderBackgroundVideo.currentTime = 0;
};
function clickOnRightButton(){
  
  disablePointerEvents();
  setTimeout(enablePointerEvents,500);
  clearTimeout(timeoutId1);
  clearTimeout(timeoutId2);
  clearTimeout(timeoutId3);
  clearInterval(intervalId1);



  if(slideIndicator === "video"){
    slideIndicator = "gallery2";
    slide1();
    timeoutId2 = setTimeout(slide2,10000);
    timeoutId3 = setTimeout(slide3,20000);
    timeoutId1 = setTimeout(slide1,44850);
    intervalId1 = setInterval(case1,44850);
    console.log(slideIndicator);
  }
  else{
    if( slideIndicator === "gallery2" ){
      slideIndicator = "gallery12";
      slide2();
      timeoutId2 = setTimeout(slide3,10000);
      timeoutId3 = setTimeout(slide1,34850);
      timeoutId1 = setTimeout(slide2,44850);
      intervalId1 = setInterval(case2,44850);
      console.log(slideIndicator);
    }
    else{
      slideIndicator = "video";
      slide3();
      timeoutId1 = setTimeout(slide1,24850);
      timeoutId2 = setTimeout(slide2,34850);
      timeoutId3 = setTimeout(slide3,44850);
      intervalId1 = setInterval(sliderAreaBehaviorOnLoad,44850);
      console.log(slideIndicator);
    }
  }
};
function clickOnLeftButton(){
  
  disablePointerEvents();
  setTimeout(enablePointerEvents,500);
  clearTimeout(timeoutId1);
  clearTimeout(timeoutId2);
  clearTimeout(timeoutId3);
  clearInterval(intervalId1);



  if(slideIndicator === "video"){
    slideIndicator = "gallery12";
    slide1Left();

    timeoutId3 = setTimeout(slide3,10000);
    timeoutId2 = setTimeout(slide1,34850);
    timeoutId1 = setTimeout(slide2,44850);
    intervalId1 = setInterval(case2,44850);
    console.log(slideIndicator);

  }
  else{
    if( slideIndicator === "gallery2" ){
      slideIndicator = "video";
      slide2Left();
      timeoutId1 = setTimeout(slide1,24850);
      timeoutId2 = setTimeout(slide2,34850);
      timeoutId3 = setTimeout(slide3,44850);
      intervalId1 = setInterval(sliderAreaBehaviorOnLoad,44850);
      console.log(slideIndicator);
    }
    else{
      slideIndicator = "video";
      slide3Left();
      timeoutId2 = setTimeout(slide2,10000);
      timeoutId3 = setTimeout(slide3,20000);
      timeoutId1 = setTimeout(slide1,44850);
      intervalId1 = setInterval(case1,44850);
      console.log(slideIndicator);
    }
  }
};
function autoplay(){
  if(slideIndicator === "video"){
    imgFallbackForVideoErrorBgContainer.style.visibility = "hidden";
    sliderBackgroundVideo.play();
    clearTimeout(timeoutId1);
    clearTimeout(timeoutId2);
    clearTimeout(timeoutId3);
    clearInterval(intervalId1);
    timeoutId1 = setTimeout(slide1,24850);
    timeoutId2 = setTimeout(slide2,34850);
    timeoutId3 = setTimeout(slide3,44850);
    intervalId1 = setInterval(sliderAreaBehaviorOnLoad,44850);
    setTimeout(enablePointerEvents,500);
  }
}



  if(promise !== undefined){
    promise.catch(error => {
      //Auto-play was prevented
      //Show a UI element to let the user manually start playback
      if (error.name === "NotAllowedError"){
        console.log("Low Power Mode Active");
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
        clearInterval(intervalId1);
        imgFallbackForVideoErrorBgContainer.style.visibility = "visible";
        disablePointerEvents();
        window.ontouchstart = autoplay;
      }
    })
  }
  else{
    imgFallbackForVideoErrorBgContainer.style.visibility = "hidden";
  }


  
  

leftArrowSliderArea.addEventListener('click',clickOnLeftButton);
rightArrowSliderArea.addEventListener('click',clickOnRightButton);


  

