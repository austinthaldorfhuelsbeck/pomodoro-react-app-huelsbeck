import React from "react";
import CurrentSession from "../Timer/CurrentSession/CurrentSession";
import ProgressBar from "../Timer/ProgressBar/ProgressBar";

export default function Timer(props) {
  //// This componenet combines two components
  // They both need the initial/total duration time
  const timerInit =
    (props.currentTimer === "focus"
      ? props.focusDuration
      : props.breakDuration) * 60;
  // combine into the props object to pass it all thru
  const initObj = { ...props, ...{ timerInit: timerInit } };

  const displayWhenPaused = !props.isTimerRunning && (
    <h2 className="my-4 paused">PAUSED</h2>
  );

  //// Build the bootstrap elements,
  // hide if stopped and return!
  if (!props.isTimerStopped) {
    return (
      <>
        <div className="row my-4">
          <div className="col">
            <CurrentSession {...initObj} />
            {displayWhenPaused}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <ProgressBar {...initObj} />
          </div>
        </div>
      </>
    );
  }
  return null;
}
