const clock = document.querySelector("#clock");
const clockStart = document.querySelector("#start");
const clockStop = document.querySelector("#stop");
const clockReset = document.querySelector("#reset");

clockStart.addEventListener("click", startClock);
clockStop.addEventListener("click", stopClock);
clockReset.addEventListener("click", resetClock);

let timer;
let [hours, minutes, seconds] = [0, 0, 0];

function startClock() {
  clock.className = "";
  clearInterval(timer);
  timer = setInterval(updateClock, 1000);
}

const stopTimer = () => clearInterval(timer);
const addZero = (number) => {
  return number < 10 ? `0${number}` : number;
};
const printClock = () => {
  [h, m, s] = [hours, minutes, seconds].map(addZero);
  clock.innerText = `${h}:${m}:${s}`;
};

function stopClock() {
  clock.className = "stopped";
  stopTimer();
}

const resetTimer = () => ([hours, minutes, seconds] = [0, 0, 0]);

function resetClock() {
  clock.className = "";
  stopTimer();
  resetTimer();
  printClock();
}

const incrementTime = () => {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours >= 24) resetTimer();
};

const updateClock = () => {
  incrementTime();
  printClock();
};
