import React, { memo } from "react";
import classNames from "../../utils/class-names";

const TimerControls = (props) => {
  // changes the play/pause icon
  const classNameFlipper = classNames({
    oi: true,
    "oi-media-play": !props.isTimerRunning,
    "oi-media-pause": props.isTimerRunning,
  });

  return (
    <div
      className="btn-group btn-group-lg mb-2"
      role="group"
      aria-label="Timer controls"
    >
      <button
        type="button"
        className="btn btn-secondary"
        data-testid="play-pause"
        title="Start or pause timer"
        onClick={props.playPause}
      >
        <span className={classNameFlipper} />
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        title="Stop the session"
        onClick={props.stopSession}
      >
        <span className="oi oi-media-stop" />
      </button>
    </div>
  );
};

export default memo(TimerControls);
