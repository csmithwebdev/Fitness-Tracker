import React from 'react'
import '../styles.css';


const WorkoutLog = (props) => {


const workouts = {
	sunday: 'Cardio',
	monday: 'Chest/Back',
	tuesday: 'Biceps/Triceps',
	wednesday: 'Shoulders/Legs',
	thursday: 'Chest/Back',
	friday: 'Biceps/Triceps',
	saturday: 'Shoulders/Legs',
};

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const getDay = days[props.date.getDay()];


const completedWorkout = (data) => {
	const confirmation = 'Are you sure you want to mark ' + props.date.toLocaleDateString("en-US", options.day) + ' as complete?';
	if (window.confirm(confirmation) === true) {
		return props.isComplete(true); //Pass this click event back to App.js
	} else {
		return props.isComplete(false);
	}	
}

function getWorkout() {
	if (getDay === 'Sunday') {
	return workouts.sunday;
	}
	if (getDay === 'Monday') {
	return workouts.monday;
	}
	if (getDay === 'Tuesday') {
	return workouts.tuesday;
	}
	if (getDay === 'Wednesday') {
	return workouts.wednesday;
	}
	if (getDay === 'Thursday') {
	return workouts.thursday;
	}
	if (getDay === 'Friday') {
	return workouts.friday;
	}
	if (getDay === 'Saturday') {
	return workouts.saturday;
	}
}
	return(
			<div>
				<h3>{getWorkout()}</h3>
				<p>{props.date.toLocaleDateString("en-US", options)}</p>
				<button className="fixed-bottom" onClick={completedWorkout} className="ui positive basic button complete">Mark as complete</button>
			</div>
		);
}

export default WorkoutLog;