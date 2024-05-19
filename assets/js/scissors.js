scissors = document.getElementById('scissors-container');


function d(){
  function moveForward(){
    scissors.style.animation = "move1 2s ease-out ";
  }
  setTimeout(moveForward,0)
  
  function moveBackward(){
  scissors.style.animation = "move2 2s ease-out ";
  }
  setTimeout(moveBackward,2000)
}
setTimeout(d,0);
setInterval(d,4000);



