import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import WorkoutLog from './components/WorkoutLog';
import UserDetails from './components/UserDetails';
import './styles.css';

const App = () => {
const [value, onChange] = useState(new Date());


//KK, i've exhausted my options. Time to make this work some other way. Try to add the class name based on whatever element
//is clicked. Going to have to do this plain ole js way somehow.

function checkComplete(isComplete) {
	console.log(isComplete);
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