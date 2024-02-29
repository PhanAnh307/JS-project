var noon = 12;
var partytime;
var evening = 18;
var night = 22;

// Make the clock work
var showCurrentTime = function() {
  var clock = document.getElementById('clock');
  var meridian = "AM";
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();  
  var seconds = new Date().getSeconds();

  // set meridian 
  if(hours >= noon) {
    meridian = "PM";
  }
  // set hours
  if(hours > 12) {
    hours = hours - 12;
  }

  // set minutes
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  //set seconds
  if(seconds < 10) {  
    seconds = "0" + seconds;  
  }



  
 // formed the clock display form
  clock.innerText = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
}

 showCurrentTime();
 setInterval(showCurrentTime, 1000);

// Active picture and reported message text to display
var updateClock = function() {
    var time = new Date().getHours(); 
    var message;
    var eventReportJS = document.getElementById('timeEvent'); 
    var lolCatImage = document.getElementById('lolcatImage');
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    

    if(time == partytime) {
      message = "Let's party!"
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    }
    else if (time == wakeuptime) {
      message = "Wake Up Time!"
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    }else if (time == lunchtime) {
      message = "Let's have some lunch!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    }else if (time == naptime) { 
      message = "Sleep tight!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    }else if (time < noon) { 
      message = "Good Morning!";  
      image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg"; 

    }else if (time >= evening){
      message = "Good evening!";
      image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    }else {
      message = "Good afternoon!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    }
    console.log(message);
    console.log(image);
    eventReportJS.innerText = message;
    lolCatImage.src = image;
    showCurrentTime();
    
}
setInterval(updateClock, 1000);

// Active party button 
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
 {
  
  if (partytime < 0)
   {
    partytime = new Date().getHours();
    partyButton.innerText = "Party Over!";
    partyButton.style.backgroundColor = "#222"
    
  }
  else 
  {
    partytime = -1;
    partyButton.innerText = "Party Time!" ;
    partyButton.style.backgroundColor = "#00000";
  }
};
partyButton.addEventListener("click", partyEvent);
partyEvent();

// Active wakeup selector 
var wakeUpSelector = document.getElementById('wakeUpTimeSelector'); 

var wakeUpEvent = function() {
  wakeuptime = wakeUpSelector.value;
};
wakeUpSelector.addEventListener('change', wakeUpEvent);
wakeUpEvent();
// Active lunch time selector
var lunchTimeSelector = document.getElementById('lunchTimeSelector'); 

var lunchTimeEvent = function() {
  lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchTimeEvent); 
lunchTimeEvent(); 

// Active nap time selector
var napTimeSelector = document.getElementById('napTimeSelector');

var napTimeEvent = function() {
  naptime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napTimeEvent);
napTimeEvent();