import React, { useState, useEffect, useRef } from "react";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const INITIAL_COUNT = 0;

function Timer() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  const twoDigits = (num) => String(num).padStart(2, "0");
  useInterval(
    () => {
      if (secondsRemaining >= 0) {
        setSecondsRemaining(secondsRemaining + 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );
  return (
    <div className="timer">
      <h3 className="timer__title">Timer for tasks</h3>
      <div className="timer__container">
      <button 
       className="button"
       onClick={handleStart} 
        type="button"
      >
        Start
      </button>
      <button 
       className="button"
       onClick={handleStop} 
       type="button"
      >
        Stop
      </button>
      <button 
       className="button"
       onClick={handleReset} 
       type="button"
      >
        Reset
      </button>
      </div>
      <div style={{ padding: 20 }}>
        {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </div>
    </div>
  );
}

export default Timer;

// for this wonderful and easy code thanks to Dan Abramov!