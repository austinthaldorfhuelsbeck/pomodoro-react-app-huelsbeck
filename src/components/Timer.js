import React from "react";

import { secondsToDuration } from "../utils/duration";

function TimerHeader({ timerInit, timeRemaining, currentTimer }) {
	return (
		<>
			<h2 data-testid="session-title">
				{currentTimer === "focus"
					? `Focusing for ${secondsToDuration(timerInit)} minutes`
					: `On Break for ${secondsToDuration(timerInit)} minutes`}
			</h2>
			<p className="lead" data-testid="session-sub-title">
				{secondsToDuration(timeRemaining)} remaining
			</p>
		</>
	);
}
function ProgressBar({ timerInit, timeRemaining }) {
	// Takes minutesRemaining as a percentage of timerInit,
	// inverts it for the progress %
	const percentage = ((timerInit - timeRemaining) / timerInit) * 100;
	const progress = percentage.toFixed(0);
	const progressPercentage = `${percentage}%`;

	//// Build the bootstrap elements and return!
	return (
		<div className="progress" style={{ height: "20px" }}>
			<div
				className="progress-bar progress-bar-striped progress-bar-animated"
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={progress}
				style={{ width: progressPercentage }}
			/>
		</div>
	);
}
function Timer({
	currentTimer,
	focusDuration,
	breakDuration,
	isTimerRunning,
	isTimerStopped,
	timeRemaining,
}) {
	//// This component combines two components
	// They both need the initial/total duration time
	const timerInit =
		(currentTimer === "focus" ? focusDuration : breakDuration) * 60;

	//// Build the bootstrap elements, hide if stopped and return!
	if (!isTimerStopped) {
		return (
			<>
				<div className="row my-4">
					<div className="col">
						<TimerHeader
							{...{ timerInit, timeRemaining, currentTimer }}
						/>
						{!isTimerRunning && (
							<h2 className="my-4 paused">PAUSED</h2>
						)}
					</div>
				</div>
				<div className="row mb-2">
					<div className="col">
						<ProgressBar {...{ timerInit, timeRemaining }} />
					</div>
				</div>
			</>
		);
	}
	return null;
}

export { Timer };
