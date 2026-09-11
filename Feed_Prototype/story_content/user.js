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
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script3 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script4 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script5 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script6 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script7 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script8 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V1");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V1", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V1");
    player.SetVar("CommentCount_V1", currentCount + 1);
}
}

window.Script9 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V1");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V1", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V1");
    player.SetVar("CommentCount_V1", currentCount + 1);
}
}

window.Script10 = function()
{
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script11 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script12 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script13 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script14 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script15 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script16 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script17 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V1");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V1", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V1");
    player.SetVar("CommentCount_V1", currentCount + 1);
}
}

window.Script18 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V1");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V1", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V1");
    player.SetVar("CommentCount_V1", currentCount + 1);
}
}

window.Script19 = function()
{
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script20 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script21 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script22 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script23 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script24 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script25 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script26 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V1");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V1", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V1");
    player.SetVar("CommentCount_V1", currentCount + 1);
}
}

window.Script27 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V1");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V1", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V1");
    player.SetVar("CommentCount_V1", currentCount + 1);
}
}

window.Script28 = function()
{
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script29 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script30 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script31 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script32 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script33 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script34 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script35 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V2");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V2", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V2");
    player.SetVar("CommentCount_V2", currentCount + 1);
}
}

window.Script36 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V2");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V2", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V2");
    player.SetVar("CommentCount_V2", currentCount + 1);
}
}

window.Script37 = function()
{
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script38 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script39 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script40 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script41 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script42 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script43 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script44 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V2");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V2", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V2");
    player.SetVar("CommentCount_V2", currentCount + 1);
}
}

window.Script45 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V2");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V2", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V2");
    player.SetVar("CommentCount_V2", currentCount + 1);
}
}

window.Script46 = function()
{
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script47 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script48 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script49 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script50 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script51 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script52 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script53 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V3");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V3", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V3");
    player.SetVar("CommentCount_V3", currentCount + 1);
}
}

window.Script54 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V3");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V3", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V3");
    player.SetVar("CommentCount_V3", currentCount + 1);
}
}

window.Script55 = function()
{
  // Ensure we only add the listener once
if (!window.wheelScrollAdded) {
    window.wheelScrollAdded = true;
    var isScrolling = false;

    window.addEventListener("wheel", function(e) {
        if (isScrolling) return; // Prevent double-skipping
        
        var player = GetPlayer();
        
        if (e.deltaY > 10) { 
            // Scrolled wheel down (Next Video)
            player.SetVar("ScrollAction", 1);
            isScrolling = true;
        } else if (e.deltaY < -10) { 
            // Scrolled wheel up (Previous Video)
            player.SetVar("ScrollAction", 2);
            isScrolling = true;
        }

        // Reset the scroll action after 0.8 seconds so they can scroll again
        setTimeout(function() {
            player.SetVar("ScrollAction", 0);
            isScrolling = false;
        }, 800);
    });
}
}

window.Script56 = function()
{
  var player = GetPlayer();
var touchstartY = 0;
var touchendY = 0;

// Reset listeners to prevent duplication
document.ontouchstart = null;
document.ontouchend = null;

// Detect where the finger starts touching
document.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;
};

// Detect where the finger stops touching
document.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;
    
    // Calculate the difference
    var swipeDistance = touchstartY - touchendY;
    
    // Swiped Up (Moves to next video)
    if (swipeDistance > 50) {
        player.SetVar("ScrollAction", 1);
    }
    
    // Swiped Down (Moves to previous video)
    if (swipeDistance < -50) {
        player.SetVar("ScrollAction", 2);
    }
};
}

window.Script57 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this interactive UMAMI prototype: ");
window.open("https://api.whatsapp.com/send?text=" + message + currentUrl, "_blank");
}

window.Script58 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this Storyline prototype: ");
window.open("sms:?body=" + message + currentUrl, "_self");
}

window.Script59 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
var subject = encodeURIComponent("Interactive Video Prototype");
var bodyText = encodeURIComponent("Take a look at this Storyline build:\n\n");
window.open("mailto:?subject=" + subject + "&body=" + bodyText + currentUrl, "_self");
}

window.Script60 = function()
{
  var currentUrl = encodeURIComponent(window.location.href);
window.open("fb-messenger://share/?link=" + currentUrl, "_self");
}

window.Script61 = function()
{
  var currentUrl = window.location.href;

navigator.clipboard.writeText(currentUrl).then(function() {
    // This tells the browser to pop up a small success message
    alert("Link copied to clipboard!");
}).catch(function(error) {
    // Failsafe in case of strict browser security
    console.error("Error copying text: ", error);
});
}

window.Script62 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V3");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V3", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V3");
    player.SetVar("CommentCount_V3", currentCount + 1);
}
}

window.Script63 = function()
{
  var player = GetPlayer();
var currentLog = player.GetVar("Log_Comments_V3");
var newComment = player.GetVar("UserInput_Temp"); 

if (newComment.trim() !== "") {
    var updatedLog = currentLog + "\nUser: " + newComment + "\n-----------------------";
    player.SetVar("Log_Comments_V3", updatedLog);
    
    // Empties the input field instantly
    player.SetVar("UserInput_Temp", ""); 

    // Increments the specific video's counter
    var currentCount = player.GetVar("CommentCount_V3");
    player.SetVar("CommentCount_V3", currentCount + 1);
}
}

};
