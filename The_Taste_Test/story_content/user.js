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
  // Pull the variables from Storyline
var player = GetPlayer();
var learnerName = player.GetVar("Learner_Name");
var trustScore = player.GetVar("Trust_Score");

// Create the custom message
var reportMessage = "🚀 MEETING ADJOURNED\n\n";
reportMessage += "Lead Developer: " + learnerName + "\n";
reportMessage += "Client Trust Score: " + trustScore + " / 5\n\n";
reportMessage += "Conclusion: The client is thrilled. Excellent work pitching the UMAMI approach!";

// Display the report in the browser
alert(reportMessage);
}

};
