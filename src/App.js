import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import WorkoutLog from './components/WorkoutLog';
import UserDetails from './components/UserDetails';
import './styles.css';

/*
NOTES:
npm install
npm install react-calendar
npm install i firebase
npm i bootstrap react-bootstrap


TODO:
1. If they click on a different month, alert them that they can't mark as complete.
2. Database to keep track of completed dates.
3. Database for loging in.
4. Database to store user details
5. Database to store workout goals
6. Database to store workouts

*/

const App = () => {
const [value, onChange] = useState(new Date());
const completedDates = [];
const [completed, getCompleted] = useState(completedDates);
const [currentMonth, setCurrentMonth] = useState(value.getMonth()); //Would be ideal to set current month based on viewChange.

function checkComplete(isComplete) {
	if (isComplete === true) {
		getCompleted(completedDates => [...completedDates, value.getDate()]);
	}
}

const tileClassName = ({date, view}) => {
	if (view === 'month' && date.getMonth() === currentMonth) {
		for(var i = 0; i<completed.length; i++) {
			if (date.getDate() === completed[i]) {
			return 'complete'
			}
		}
   	}
}


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