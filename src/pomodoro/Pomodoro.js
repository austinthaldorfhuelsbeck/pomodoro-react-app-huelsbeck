import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import SetTimer from "./SetTimer/SetTimer";
import TimerControls from "./TimerControls/TimerControls";
import Timer from "./Timer/Timer";
import alarmAudio from "../alarm/alarm.mp3";

export default function Pomodoro(props) {
  //// Defining initial states + setting up state things ////
  ////
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerStopped, setIsTimerStopped] = useState(true);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState("focus");

  //// "The Brain": the timer itself
  useInterval(
    () => {
      if (timeRemaining === 0) {
        new Audio(alarmAudio).play();
        // toggle timer break and reset seconds remaining
        setCurrentTimer(currentTimer === "focus" ? "break" : "focus");
        setTimeRemaining(
          currentTimer === "focus" ? breakDuration * 60 : focusDuration * 60
        );
      } else {
        // count down the timer
        setTimeRemaining((currentTime) => currentTime - 1);
      }
    },
    isTimerRunning ? 20 : null
  );

  //// Handlers for buttons
  // Play / Pause button
  function handlePlayPause() {
    setIsTimerRunning((prevState) => !prevState);
    // if everything's stopped, flip the state of the stopped variable
    if (isTimerStopped && !isTimerRunning) {
      setIsTimerRunning(true);
      setIsTimerStopped(false);
      // also using this opportunity to initialize time remaining
      // if it's adjusted before hitting play for the first time
      setTimeRemaining(focusDuration * 60);
    }
  }
  // Increase / Decrease buttons
  function handleFocusIncrease() {
    if (isTimerStopped && focusDuration < 60) {
      setFocusDuration((currentDuration) => currentDuration + 5);
      setTimeRemaining((currentDuration) => (currentDuration + 5) * 60);
    }
  }
  function handleFocusDecrease() {
    if (isTimerStopped && focusDuration > 5) {
      setFocusDuration((currentDuration) => currentDuration - 5);
      setTimeRemaining((currentDuration) => (currentDuration - 5) * 60);
    }
  }
  function handleBreakIncrease() {
    if (isTimerStopped && breakDuration < 15)
      setBreakDuration((currentDuration) => currentDuration + 1);
  }
  function handleBreakDecrease() {
    if (isTimerStopped && breakDuration > 1)
      setBreakDuration((currentDuration) => currentDuration - 1);
  }
  // Stop button
  function handleStop() {
    if (!isTimerStopped) {
      // Initializes every possible thing
      setIsTimerRunning(false);
      setIsTimerStopped(true);
      setFocusDuration(25);
      setBreakDuration(5);
      setTimeRemaining(25 * 60);
      setCurrentTimer("focus");
    }
  }

  //// Defining props
  const focusProps = {
    title: "Focus Duration",
    id: "focus",
    count: focusDuration,
    handleDecrease: handleFocusDecrease,
    handleIncrease: handleFocusIncrease,
    isTimerStopped: isTimerStopped,
  };
  const breakProps = {
    title: "Break Duration",
    id: "break",
    count: breakDuration,
    handleDecrease: handleBreakDecrease,
    handleIncrease: handleBreakIncrease,
    isTimerStopped: isTimerStopped,
  };
  const timerProps = {
    timeRemaining: timeRemaining,
    isTimerRunning: isTimerRunning,
    isTimerStopped: isTimerStopped,
    focusDuration: focusDuration,
    breakDuration: breakDuration,
    currentTimer: currentTimer,
  };
  const timerControlProps = {
    playPause: handlePlayPause,
    stopSession: handleStop,
    isTimerRunning: isTimerRunning,
  };

  //// Build the bootstrap elements and return!
  return (
    <div className="pomodoro">
      <div className="row">
        <div className="mx-auto">
          <SetTimer {...focusProps} />
        </div>
      </div>
      <div className="row">
        <div className="mx-auto">
          <SetTimer {...breakProps} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TimerControls {...timerControlProps} />
        </div>
      </div>
      <div>
        <Timer {...timerProps} />
      </div>
    </div>
  );
}
