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
var startButtonEl = document.querySelector("#startButton");
var timerEl = document.querySelector("#countdown");
var pageOneEl = document.querySelector("#questionsPageOne");
var pageTwoEl = document.querySelector("#questionsPageTwo");
var pageThreeEl = document.querySelector("#questionsPageThree");
var startMenuEl = document.querySelector("#quizStartPage");

var startMenu = true; /* startMenu is true because the webpage first begins only showing the startmenu. */

/* This variable focuses on initialising variables for the buttons */
var pageOneAllButtons = document.querySelector(".pageOneAllButtons");
var pageTwoAllButtons = document.querySelector(".pageTwoAllButtons");
var pageThreeAllButtons = document.querySelector(".pageThreeAllButtons");
/* var questionOneButton = document.querySelector("#questionOne"); */

/* hides questionsPageOne and questionspageTwo only showing the start menu */
pageOneEl.style.display = "none";
pageTwoEl.style.display = "none";
pageThreeEl.style.display = "none";

pageOneAllButtons.addEventListener("click", function () {
  console.log("entered pageOneAllButtons.")
  pageOneEl.style.display = "none";
  pageTwoEl.style.display = "block"; /* moves to page 2 */
});

pageTwoAllButtons.addEventListener("click", function () {
  console.log("entered pageTwoAllButtons.")
  pageTwoEl.style.display = "none";
  pageThreeEl.style.display = "block";
});

function showQuestions() {
  console.log("showQuestions function has activated!");
  /* code hides the startMenuEl and displays the first page of questions */
  if (startMenu) {
    startMenuEl.style.display = "none"; /* hides start-menu */
    pageOneEl.style.display = "block"; /* Moves to page 1 */
  }

  console.log("showQuestions function has ended.");
}

function startTimer() {
  console.log("startTimer function has activated!");
  var timeLeft = 1000;

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
  console.log("startTimer function has ended");
}

function startQuiz() {
  console.log("startGame function has activated!");
  console.log("startGame function has ended.");
  /* The previous page will then be removed so that a new page will appear with questions. */
  startTimer();
  showQuestions();
}
/* This is the code that gets the start menu to advance to the next functions */
startButtonEl.addEventListener("click", startQuiz);
