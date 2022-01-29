import '../styles.css';
import React, {useState, useEffect} from 'react';
import UserDetails from './UserDetails';
import Sidebar from './Sidebar';
import {Button, Card, Alert, Container, Row, Col, Dropdown} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import firebase from '../firebase';


const Goals = (props) => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();


	async function handleLogout () {
		setError('');
		try {
			await logout();
			navigate('/login');
		} catch {
			setError('Failed to logout.')
		}
	}


	return (
			<>
				<Row className="breadcrumbs"> 
					<h5>Goal Tracker</h5>
				</Row>
				<Container className="calendarPanel" fluid>
					<Row>
						<UserDetails />
					</Row>
				</Container>
				<br />
				<Container className="calendarPanel" fluid>
					<Row>
						<h4>Progress Graph</h4>
					</Row>

					<Row>
						<h4>You will reach your goal in x Days (See here how this is determined)</h4>
					</Row>
				</Container>
			</>
		
	)
}

export default Goals;