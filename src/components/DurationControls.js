import React from "react";
import { minutesToDuration } from "../utils/duration";

function DurationControls({
	id,
	isTimerStopped,
	title,
	count,
	handleDecrease,
	handleIncrease,
}) {
	// disables the increase/decrease when playing
	const buttonClass = isTimerStopped
		? "btn btn-outline-light"
		: "btn btn-outline-light disabled";

	//// Build the structure and return!
	return (
		<div className="input-group input-group-lg my-4">
			<span className="input-group-text" data-testid={`duration-${id}`}>
				{title}: {minutesToDuration(count)}
			</span>
			<div className="input-group-append">
				<button
					type="button"
					className={buttonClass}
					data-testid={`decrease-${id}`}
					onClick={handleDecrease}
				>
					<span className="oi oi-minus" />
				</button>
				<button
					type="button"
					className={buttonClass}
					data-testid={`increase-${id}`}
					onClick={handleIncrease}
				>
					<span className="oi oi-plus" />
				</button>
			</div>
		</div>
	);
}

export { DurationControls };
