// Unify servises containers to the largest container height in the section
var targetServicesText = document.getElementsByClassName ("service-text");
function unifyServicesContainersToMaxHeight(){
  var serviceTextHeightArray = [];
  var maxServiceTextHeight = 0;
  var heightToAddArray = [];
  var newServiceTextHeightArray = []  ;
  for(targetServicesTextIndex=0;targetServicesTextIndex<targetServicesText.length;targetServicesTextIndex++){
    var targetServiceTextComputedStyle = window.getComputedStyle(targetServicesText[targetServicesTextIndex]);
    var targetServiceTextHeight = targetServiceTextComputedStyle.getPropertyValue('height');
    serviceTextHeightArray.push(targetServiceTextHeight.replace("px",""));
  };
  for(serviceTextHeightArrayIndex=0;serviceTextHeightArrayIndex<serviceTextHeightArray.length;serviceTextHeightArrayIndex++){
    if(JSON.parse(serviceTextHeightArray[serviceTextHeightArrayIndex])>maxServiceTextHeight){
      maxServiceTextHeight = JSON.parse(serviceTextHeightArray[serviceTextHeightArrayIndex]);
    }
    else{
      maxServiceTextHeight =  maxServiceTextHeight;
    }
  }
  for(serviceTextHeightArrayIndex=0;serviceTextHeightArrayIndex<serviceTextHeightArray.length;serviceTextHeightArrayIndex++){
    heightToAddArray.push(maxServiceTextHeight - JSON.parse(serviceTextHeightArray[serviceTextHeightArrayIndex]));
    newServiceTextHeightArray.push(JSON.parse(serviceTextHeightArray[serviceTextHeightArrayIndex])  + heightToAddArray[serviceTextHeightArrayIndex]);
    targetServicesText[serviceTextHeightArrayIndex].style.height = newServiceTextHeightArray[serviceTextHeightArrayIndex] + "px";
  }
}
function resetContainersHeightToOriginalOnResize(){
  for(targetServicesTextIndex=0;targetServicesTextIndex<targetServicesText.length;targetServicesTextIndex++){
    targetServicesText[targetServicesTextIndex].style.height = "auto";
  }  
}
window.addEventListener('load',unifyServicesContainersToMaxHeight);
window.addEventListener('resize',resetContainersHeightToOriginalOnResize);
window.addEventListener('resize',unifyServicesContainersToMaxHeight);