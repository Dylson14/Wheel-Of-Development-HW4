/*  Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score */

/* Creating a starEl variable that is fetching the startButton id */
var startEl = document.querySelector("#startButton");
var timerEl = document.querySelector("#countdown");

function startTimer() {
  var timeLeft = 10000;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function startGame() {
  window.alert("Alert test to see if button works.");
  /* The previous page will then be removed so that a new page will appear with questions. */

  startTimer();
}

startEl.addEventListener("click", startGame);
