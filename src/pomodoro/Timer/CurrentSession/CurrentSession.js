import React, { memo } from "react";
import { minutesToDuration, secondsToDuration } from "../../../utils/duration";

const CurrentSession = (props) => {
  //// Handling props:
  // formatting display of time
  const minutesTotal = secondsToDuration(props.timerInit);
  const minutesRemaining = secondsToDuration(props.timeRemaining);
  // formatting content of h2
  const headerContent =
    props.currentTimer === "focus"
      ? `Focusing for ${minutesTotal} minutes`
      : `On Break for ${minutesTotal} minutes`;

  //// Build the subheader component
  const subHeader = (
    <p className="lead" data-testid="session-sub-title">
      {minutesRemaining} remaining
    </p>
  );

  //// Combine and return!
  return (
    <>
      <h2 data-testid="session-title">{headerContent}</h2>
      {subHeader}
    </>
  );
};

export default memo(CurrentSession);
