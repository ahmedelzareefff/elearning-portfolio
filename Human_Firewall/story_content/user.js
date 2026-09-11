window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const player = GetPlayer();
let totalSeconds = 60; 

if (window.gameTimer) {
    clearInterval(window.gameTimer);
}

// 1. IGNITION: Flip the switch to play the 1-minute audio track immediately
let currentToggle = player.GetVar("v_bool_Play_Tick_Sound");
player.SetVar("v_bool_Play_Tick_Sound", !currentToggle);

// 2. START THE VISUAL COUNTDOWN
window.gameTimer = setInterval(function() {
    totalSeconds--;
    player.SetVar("v_Timer_Seconds", totalSeconds);
    
    let seconds = totalSeconds % 60;
    let displayMinutes = "00"; 
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    
    player.SetVar("v_Timer_Display", displayMinutes + ":" + displaySeconds);
    
    if (totalSeconds <= 0) {
        clearInterval(window.gameTimer);
    }
}, 1000);
}

window.Script2 = function()
{
  if (window.gameTimer) {
    clearInterval(window.gameTimer);
}
}

};
