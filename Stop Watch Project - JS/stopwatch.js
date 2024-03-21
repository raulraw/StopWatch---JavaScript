let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval;

document.querySelector('.js-start-button').addEventListener('click', function() {
  startWatch();
});

document.querySelector('.js-pause-button').addEventListener('click', function() {
  pauseWatch();
});

document.querySelector('.js-stop-button').addEventListener('click', function() {
  stopWatch();
});

function startWatch() {
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
}

function stopWatch() {
  clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

function pauseWatch() {
  clearInterval(timeInterval);
}

function displayTime() {
  const timerDisplay = document.querySelector('.timer');
  timerDisplay.innerHTML = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}
