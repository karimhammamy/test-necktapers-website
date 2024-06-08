headerLogoImage = document.getElementById('header-logo-image-id');
function bigLogoAnimation(){
  function smallLogoAnimation1(){
    headerLogoImage.style.transition = "1.5s";
    headerLogoImage.style.scale = "0.6";
    headerLogoImage.style.transform = "rotateX(360deg)";
  }
  setTimeout(smallLogoAnimation1,0);


  function smallLogoAnimation2(){
    headerLogoImage.style.transition = "1.5s";
    headerLogoImage.style.scale = "1";
    headerLogoImage.style.transform = "rotateX(-360deg)";
   
  }
  setTimeout(smallLogoAnimation2,6500);
};
setTimeout(bigLogoAnimation,1000);
setInterval(bigLogoAnimation,13000);