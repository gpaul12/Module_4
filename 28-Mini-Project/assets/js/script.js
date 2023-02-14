var gererateBtn = document.querySelector(".start-button")
var timerEl = document.querySelector(".timer-count")
var container = document.querySelector(".word-blanks");

gererateBtn.addEventListener("click", startGame);

function startGame () {
    countdown();
}

function countdown() {
    var timeLeft = 10;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent=timeLeft;
      if (timeLeft===0){
        clearInterval(timeInterval);
        displayMessage();
        timerEl.textContent = '';
      }
  },1000);
  }


container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent = element.getAttribute("data-number");
      element.setAttribute("data-state", "visible")
    } else {
      element.textContent= "";
      element.setAttribute("data-state", "hidden")
    }
  }
});
