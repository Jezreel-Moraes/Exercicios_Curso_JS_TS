function clock() {
  const clock = document.querySelector(".clock");
  const stopped = "stopped";

  document.addEventListener("click", function (event) {
    const element = event.target;
    if (!element.hasAttribute("class")) return;

    const className = element.className;
    const buttonFunctions = {
      start: startClock,
      stop: stopClock,
      reset: resetClock,
    };

    const buttonFunction = buttonFunctions[className];
    return buttonFunction ? buttonFunction() : null;
  });

  // let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  let timer;
  let milliseconds = 0;
  const timeOut = 10;

  function startClock() {
    clock.classList.remove(stopped);
    clearInterval(timer);
    timer = setInterval(updateClock, timeOut);
  }

  const stopTimer = () => clearInterval(timer);

  const addZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const createClockWithMilliseconds = (milliseconds) => {
    const date = new Date(milliseconds * timeOut);
    const dateMillisecondsDividedByTimeOut = date.getMilliseconds() / timeOut;
    const clockTime =
      date
        .toLocaleTimeString("pt-BR", {
          hour12: false,
          timeZone: "UTC",
        })
        .toString() + `:${addZero(dateMillisecondsDividedByTimeOut)}`;

    return clockTime;
  };

  const printClock = () => {
    // [h, m, s, ms] = [hours, minutes, seconds, milliseconds].map(addZero);
    // clock.innerText = `${h}:${m}:${s}:${ms}`;
    clock.innerText = createClockWithMilliseconds(milliseconds);
  };

  function stopClock() {
    clock.classList.add(stopped);
    stopTimer();
  }

  const resetTimer = () =>
    // ([hours, minutes, seconds, milliseconds] = [0, 0, 0, 0]);
    (milliseconds = 0);

  function resetClock() {
    clock.classList.remove(stopped);
    stopTimer();
    resetTimer();
    printClock();
  }

  const incrementTime = () => {
    milliseconds++;
    // if (milliseconds >= 100) {
    //   milliseconds = 0;
    //   seconds++;
    // }
    // if (seconds >= 60) {
    //   seconds = 0;
    //   minutes++;
    // }
    // if (minutes >= 60) {
    //   minutes = 0;
    //   hours++;
    // }
    // if (hours >= 24) resetTimer();
  };

  const updateClock = () => {
    incrementTime();
    printClock();
  };
}

clock();
