import '../styles.css';
import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import WorkoutLog from './WorkoutLog';
import UserDetails from './UserDetails';
import {Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
	const [value, onChange] = useState(new Date());
	const completedDates = [];
	const [completed, getCompleted] = useState(completedDates);
	const [currentMonth, setCurrentMonth] = useState(value.getMonth()); //Would be ideal to set current month based on viewChange.
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

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

	async function handleLogout () {
		setError('');
		try {
			await logout();
			navigate('/login');
		} catch {
			setError('Failed to logout.')
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
				<Card>
					<Card.Body>
						<h2>Profile</h2>
						{error && <Alert variant="danger">{error}</Alert>}
						<strong>Email: {currentUser.email}</strong>
						<Link to ="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
					</Card.Body>
				</Card>
				<Button variant="link" onClick={handleLogout}>Log Out</Button>

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
	)
}

export default Dashboard;