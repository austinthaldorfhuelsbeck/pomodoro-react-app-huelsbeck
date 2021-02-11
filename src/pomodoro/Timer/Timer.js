import React, { memo } from "react";
import CurrentSession from "../Timer/CurrentSession/CurrentSession";
import ProgressBar from "../Timer/ProgressBar/ProgressBar";

const Timer = (props) => {
  //// This componenet combines two components
  // They both need the initial/total duration time
  const timerInit =
    (props.currentTimer === "focus"
      ? props.focusDuration
      : props.breakDuration) * 60;
  // combine into the props object to pass it all thru
  const initObj = { ...props, ...{ timerInit: timerInit } };

  // pseudo component to display whether paused or not
  // (hidden when not paused)
  const displayPaused = !props.isTimerRunning && (
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
            {displayPaused}
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
};

export default memo(Timer);
