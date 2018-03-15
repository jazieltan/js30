
//set global Vars
let down = false; // Var to check if any key is pressed

// init event listeners
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', keyReleased);

const keys = document.querySelectorAll(`.key`); // selector to hold an array under the .key element
keys.forEach(key => key.addEventListener('transitionend', removeTrans)); // remove transitions after it ended

// define functions
function playSound (evt){
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
/* if the audio element is not found OR if a key is pressed down, stop the function

Question: Why does holding down one key (down = true) does not stop the function for other keys?
Answer: It does for the first time, untill everytime a user releases a key, down is set back to false.
        Refer to keyReleased() */
  if (!audio)return;
  audio.currentTime = 0; // reset audio timer for quick playing
  audio.play(); // play... duh
  key.classList.add('playing'); //add animation
}

// remove a transition after it finishes playing
function removeTrans(evt){
  if(evt.propertyName !== 'box-shadow')return;
  this.classList.remove('playing');
}

function keyReleased(){
  up = true;
}

// upcoming things
/*
+ dont use keyCode use .key instead. 
+ Refine key press. Check keys against what is already press and ignore or proceed with function.
+ Code for touch events.
+ Set the metronome using a timer function
+ Add background tracks for simultaneous playing. play and stop button.
+ Enchance visual with Canvas.
+ If keydown don't remove trans
*/
