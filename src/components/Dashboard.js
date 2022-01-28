import '../styles.css';
import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import WorkoutLog from './WorkoutLog';
import Sidebar from './Sidebar';
import {Button, Card, Alert, Container, Row, Col, Dropdown} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CalendarArea from './CalendarArea';
import Goals from './Goals';
import UpdateProfile from './UpdateProfile';


const Dashboard = (props) => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();


	async function handleLogout () {
		setError('');
		try {
			await logout();
			navigate('/login');
		} catch {
			setError('Failed to logout.')
		}
	}

	function getCalendar() {
		if(location.pathname === '/calendar') {
			return <CalendarArea />;
		}
	}

	function getGoals() {
		if(location.pathname === '/goals') {
			return <Goals />;
		}
	}

	function getUpdateProfile() {
		if(location.pathname === '/update-profile') {
			return <UpdateProfile />;
		}
	}




	return (
			<Container fluid>
				<Row>
				<Sidebar />
					<Col>
						<Row className="topnav">
						<Col lg={10}>
							<div>
								<h1></h1>
							</div>
						</Col>
						<Col>
						<Dropdown>
							<Dropdown.Toggle variant="none" id="dropdown-basic">
								<Row className="profileDrop">
									<Col lg={3} className="d-flex justify-content-center">
									<img className="profileImage" src="https://www.csmithwebdev.com/wp-content/uploads/2022/01/headshot2.jpg"/>
									</Col>
									<Col className="d-flex align-items-center">
									<p>Casey Smith</p>
									</Col>							
								</Row>
							</Dropdown.Toggle>
							<Dropdown.Menu>
							    <Dropdown.Item className="profileLink"><Link to ="/update-profile">Change Password/Email</Link></Dropdown.Item>
							    <Dropdown.Item className="profileLink" onClick={handleLogout}>Logout</Dropdown.Item>

							  </Dropdown.Menu>
						</Dropdown>
						</Col>						
						</Row>
						{getCalendar()}
						{getGoals()}
						{getUpdateProfile()}

						
						
					</Col>
				</Row>
			</Container>
		
	)
}

export default Dashboard;