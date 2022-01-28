import '../styles.css';
import React, {useState, useEffect} from 'react';
import UserDetails from './UserDetails';
import Sidebar from './Sidebar';
import {Button, Card, Alert, Container, Row, Col, Dropdown} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


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
	
			<div className="ui grid">
				<Row className="breadcrumbs"> 
					<h5>Fitness Goals</h5>
				</Row>
				<Container className="calendarPanel" fluid>
					<Row>
						<UserDetails />
					</Row>
				</Container>
			</div>
		
	)
}

export default Goals;