import React from "react";
import "./App.css";

import { Timer } from "./components/Timer";
import classNames from "./utils/class-names";
import { usePomodoro } from "./hooks/usePomodoro";
import { DurationControls } from "./components/DurationControls";

function Pomodoro() {
	//// Custom hook
	const {
		focusDuration,
		handleFocusDecrease,
		handleFocusIncrease,
		isTimerStopped,
		breakDuration,
		handleBreakDecrease,
		handleBreakIncrease,
		timeRemaining,
		isTimerRunning,
		currentTimer,
		handlePlayPause,
		handleStop,
	} = usePomodoro();

	//// Defining variable props
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

	//// Build the bootstrap elements and return!
	return (
		<div className="pomodoro">
			<div className="row">
				<div className="mx-auto">
					<DurationControls {...focusProps} />
				</div>
			</div>
			<div className="row">
				<div className="mx-auto">
					<DurationControls {...breakProps} />
				</div>
			</div>
			<div className="row">
				<div className="col">
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
							onClick={handlePlayPause}
						>
							<span
								className={classNames({
									oi: true,
									"oi-media-play": !isTimerRunning,
									"oi-media-pause": isTimerRunning,
								})}
							/>
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							title="Stop the session"
							onClick={handleStop}
						>
							<span className="oi oi-media-stop" />
						</button>
					</div>
				</div>
			</div>
			<div>
				<Timer
					{...{
						timeRemaining,
						isTimerRunning,
						isTimerStopped,
						focusDuration,
						breakDuration,
						currentTimer,
					}}
				/>
			</div>
		</div>
	);
}

const App = () => {
	return (
		<div className="App transparentBox">
			<header className="App-header container">
				<h1>Pomodoro Timer</h1>
			</header>
			<div className="container">
				<Pomodoro />
			</div>
		</div>
	);
};

export { App, Pomodoro };
