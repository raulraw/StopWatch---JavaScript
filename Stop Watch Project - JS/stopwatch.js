let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval;
let watchIsActive =false;
document.querySelector('.js-start-button').addEventListener('click', function() {
  startWatch();
});

document.querySelector('.js-pause-button').addEventListener('click', function() {
  pauseWatch();
});

document.querySelector('.js-stop-button').addEventListener('click', function() {
  stopWatch();
});

// Get the modal
var modal = document.getElementById("error-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function startWatch() {
  if (!watchIsActive) {
    watchIsActive = true;
    timeInterval = setInterval(function() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      displayTime();
    }, 1000);
  } else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Fraiere, ceasul este deja pornit!";
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function stopWatch() {
  if(seconds == 0 && minutes == 0 && hours == 0){
    alert("Fraiere, nu vezi ca esti pe 0?");
  }
  else{
    clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    watchIsActive = false;
  }
  
}

function pauseWatch() {
  if(watchIsActive == true){
    clearInterval(timeInterval);
    watchIsActive = false;
  }
  else
  {
    alert("Fraiere, ceasul e deja oprit!");
  }
  
}

function displayTime() {
  const timerDisplay = document.querySelector('.timer');
  timerDisplay.innerHTML = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}
