import React from 'react';
import '../styles.css';

const UserDetails = (props) => {

	const userDetails = {
		name: 'Casey',
		weight: null,
		goalWeight: null,
		successDays: null,
		failedDays: null,
		daysLeft: null
	};



	return (
		<div>
			<div id="panel" className="two wide column">
					<h3>Hello, {userDetails.name}</h3>
					<p>Current Weight: 185 <a className="update_button" href="#">update</a></p>
					<p>Goal Weight: 160 <a className="update_button" href="#">update</a></p>
					<p>Successful days: 1</p>
					<p>Failed days: 0</p>
					<p>Days until you hit your goal: 119</p>
			</div>
		</div>
		);
}

export default UserDetails;

