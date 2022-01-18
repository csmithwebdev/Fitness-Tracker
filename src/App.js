import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './styles.css';



const App = () => {
const [value, onChange] = useState(new Date());

return (
	<div className="ui container">
		<div className="ui grid">
			<div id="panel" className="four wide column">
				<h3>Hello, Casey</h3>
				<p>Current Weight: 185</p>
				<p>Goal Weight: 160</p>
				<p>Successful days: 1</p>
				<p>Failed days: 0</p>
				<p>Days until you hit your goal: 119</p>
			</div>
			<div className="twelve wide column">
				<Calendar
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	</div>
	);
}

export default App;