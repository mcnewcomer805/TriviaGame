
//  Simple Timer Solution

//  Step 1:
//  Use the following link inside the Audio function below:
//  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
//var audio = new Audio("raven.mp3");
var action = $("#action");
var winCounter = 0;
var lossCounter = 0;
var wordsList = ["deathValley" , "palmSprings" , "dayOff" , "noDayOff" , "seventy" , "notSeventy"];

// action.on("click" , function(event){
    // fiveSeconds();
    // tenSeconds()
// })
//  Step 2:
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

//  Step 3:
//  Fill in the blanks to these functions.
        // function fiveSeconds() {
        // $("action")..on("click" function(event)}
function fiveSeconds() {   
   
    // setTimeout(fiveSeconds, 1000 * 5);
    // setTimeout(tenSeconds, 1000 * 10);
    // setTimeout(timeUp, 1000 * 15);
    
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {

  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

  //  The following line will play the audio file we linked to above:
 // audio.play();
}
//     for (var i = 0; i < wordList; i++) {
// }
//     document.getElementById("deathValley");
//     if ($(this).va)


function startGame() {
  // tenSeconds
for (var i = 0; i < wordList; i++) {

  if (action1.val() === "true") {
    object.addEventListener("click", my_script);
    // document.getElementById("action1").addEventListener("click", myFunction);
  //  document.getElementById("deathValley")
    wins++
    document.getElementById("win-counter").innerHTML = winCounter;
    console.log(startGame);
    function myFunction() {
      document.getElementById("action1").submit();
  }
  }
}
}
