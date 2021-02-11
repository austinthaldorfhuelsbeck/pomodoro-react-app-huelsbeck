import React, { memo } from "react";

const ProgressBar = (props) => {
  // Takes minutesRemaining as a percentage of timerInit,
  // inverts it for the progress %
  const percentage =
    ((props.timerInit - props.timeRemaining) / props.timerInit) * 100;
  const progress = percentage.toFixed(0);
  const progressPercentage = `${percentage}%`;

  //// Build the bootstrap elements and return!
  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        style={{ width: progressPercentage }}
      />
    </div>
  );
};

export default memo(ProgressBar);
