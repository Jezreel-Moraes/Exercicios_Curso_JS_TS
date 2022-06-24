function clock() {
  const clock = document.querySelector("#clock");

  document.addEventListener("click", function (event) {
    const element = event.target;
    if (!element.hasAttribute("id")) return;

    const attribute = element.getAttribute("id");

    const buttonFunctions = {
      start: startClock,
      stop: stopClock,
      reset: resetClock,
    };

    const buttonFunction = buttonFunctions[attribute];
    return buttonFunction ? buttonFunction() : null;
  });

  // let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  let timer;
  let milliseconds = 0;
  const timeOut = 10;

  function startClock() {
    clock.className = "";
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
    clock.className = "stopped";
    stopTimer();
  }

  const resetTimer = () =>
    // ([hours, minutes, seconds, milliseconds] = [0, 0, 0, 0]);
    (milliseconds = 0);

  function resetClock() {
    clock.className = "";
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
