import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import WorkoutLog from './components/WorkoutLog';
import UserDetails from './components/UserDetails';
import './styles.css';

const App = () => {
const [value, onChange] = useState(new Date());
const completedDates = [];
const [completed, getCompleted] = useState(completedDates);

function checkComplete(isComplete) {
	if (isComplete === true) {
		getCompleted(completedDates => [...completedDates, value.getDate()]); // Push dates to 
	}
}

const tileClassName = ({date}) => {
	for(var i = 0; i<completed.length; i++) {
		if (date.getDate() === completed[i]) {
			return 'complete'
		}
	}
}

//TODO: 1. Make sure it's only dates in current month view. Work on logic for the confirm window.

function tileContent({date}) {
	if (date.getDay() === 1) {
		return <div className="desc">Chest/Back</div>;
	}
	if (date.getDay() === 2) {
		return <div className="desc">Biceps/Triceps</div>;
	}
	if (date.getDay() === 3) {
		return <div className="desc">Shoulders/Legs</div>;
	}
	if (date.getDay() === 4) {
		return <div className="desc">Chest/Back</div>;
	}
	if (date.getDay() === 5) {
		return <div className="desc">Biceps/Triceps</div>;
	}
	if (date.getDay() === 6) {
		return <div className="desc">Shoulders/Legs</div>;
	}
	if (date.getDay() === 0) {
		return <div className="desc">Cardio</div>;
	}
}
  


return (
	<div className="ui container">
		<div className="ui grid">
			<UserDetails />

			<div className="eight wide column">
				<Calendar
					onChange={onChange}
					value={value}
					tileContent = {tileContent}
					tileClassName = {tileClassName}
					showNeighboringMonth = {false}
				/>
			</div>

			<WorkoutLog
				date={value}
				isComplete = {checkComplete}
			 />
			
		</div>
	</div>
	);
}

export default App;