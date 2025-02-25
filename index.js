let countdown;

function startCountdown() {
  let seconds = document.getElementById("timeInput").value;
  let timerDisplay = document.getElementById("timer");

  clearInterval(countdown);

  countdown = setInterval(() => {
    if (seconds > 0) {
      timerDisplay.innerText = seconds + " Sekunden";
      seconds--;
    } else {
      clearInterval(countdown);
      timerDisplay.innerText = "🎉 Zeit abgelaufen!";
    }
  }, 1000);
}
