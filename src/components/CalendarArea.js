import '../styles.css';
import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import WorkoutLog from './WorkoutLog';
import UserDetails from './UserDetails';
import Sidebar from './Sidebar';
import {Button, Card, Alert, Container, Row, Col, Dropdown} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


const CalendarArea = (props) => {
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
		<>
			<Row className="breadcrumbs"> 
				<h5>Calendar</h5>
			</Row>
			<Container className="calendarPanel" fluid>
				<Row>
					<Col className="workoutLog" lg="3">
						{/*<UserDetails />*/}
						 <WorkoutLog
							date={value}
							isComplete = {checkComplete}
						 />
					</Col>
					<Col className="theCalendar">
							<Calendar
								onChange={onChange}
								value={value}
								tileContent = {tileContent}
								tileClassName = {tileClassName}
								showNeighboringMonth = {false}
							/>
						</Col>
					</Row>
			</Container>
		</>
	)
}

export default CalendarArea;