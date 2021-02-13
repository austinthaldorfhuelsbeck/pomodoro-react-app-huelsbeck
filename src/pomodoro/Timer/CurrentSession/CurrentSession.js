import React from "react";
import { minutesToDuration, secondsToDuration } from "../../../utils/duration";

export default function CurrentSession(props) {
  //// Handling props
  const minutesTotal = secondsToDuration(props.timerInit);
  const minutesRemaining = secondsToDuration(props.timeRemaining);

  //// Build the header and subheader
  const headerContent =
    props.currentTimer === "focus"
      ? `Focusing for ${minutesTotal} minutes`
      : `On Break for ${minutesTotal} minutes`;
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
}
