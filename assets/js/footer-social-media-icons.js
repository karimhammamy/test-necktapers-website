//tiktok-icon-js
tikTokAnchor = document.getElementById("fa-tiktok-anchor");
tikTokImg=document.getElementById('fa-tiktok-id'); 
function delay1(){
  function changeTikTokIconColor(){tikTokImg.style.transition= "400ms"; tikTokImg.style.color= "white";};setTimeout(changeTikTokIconColor,250);
}
function delay2(){function changeTikTokIconColor(){
  tikTokImg.style.transition= "400ms"; tikTokImg.style.color= "rgb(124,124,124)";};setTimeout(changeTikTokIconColor,250);
}  
tikTokAnchor.addEventListener('mouseover',delay1);
tikTokAnchor.addEventListener('mouseout',delay2);