function clock() {
  const clock = document.querySelector(".clock");
  const stopped = "stopped";
  const timeOut = 10;

  let timer;
  let milliseconds = 0;

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
    clock.innerText = createClockWithMilliseconds(milliseconds);
  };

  function stopClock() {
    clock.classList.add(stopped);
    stopTimer();
  }

  const resetTimer = () => (milliseconds = 0);

  function resetClock() {
    clock.classList.remove(stopped);
    stopTimer();
    resetTimer();
    printClock();
  }

  const incrementTime = () => milliseconds++;

  const updateClock = () => {
    incrementTime();
    printClock();
  };
}

clock();
