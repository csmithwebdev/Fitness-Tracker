import '../styles.css';
import React from 'react';
import Sidebar from './Sidebar';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import {useDatabase} from "../contexts/DatabaseContext";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CalendarArea from './CalendarArea';
import Goals from './Goals';
import UpdateProfile from './UpdateProfile';
import UpdateGoals from './UpdateGoals';


const Dashboard = (props) => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const { firstName, lastName} = useDatabase();


	async function handleLogout () {
		try {
			await logout();
			navigate('/login');
		} catch {
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

	function getUpdateGoals() {
		if(location.pathname === '/update-goals') {
			return <UpdateGoals />;
		}
	}     


	return (
			<Container fluid>
				<Row>
				<Sidebar />
					<Col>
						<Row className="topnav">
						<Col lg={10}>
						</Col>
						<Col>
						<Dropdown>
							<Dropdown.Toggle variant="none" id="dropdown-basic">
								<Row className="profileDrop">
									<Col lg={3} className="d-flex justify-content-center">
									<img className="profileImage" alt="user profile" src="https://www.csmithwebdev.com/wp-content/uploads/2022/01/headshot2.jpg"/>
									</Col>
									<Col className="d-flex align-items-center">
									<p>{firstName} {lastName}</p>
									</Col>							
								</Row>
							</Dropdown.Toggle>
								<Dropdown.Menu>
									<Link className="profileLink" to ="/update-goals">User Settings</Link>
								    <Link className="profileLink" to ="/update-profile">Security</Link>
								    <Dropdown.Item className="profileLink" onClick={handleLogout}>Logout</Dropdown.Item>
								 </Dropdown.Menu>
						</Dropdown>
						</Col>						
						</Row>
						{getCalendar()}
						{getGoals()}
						{getUpdateProfile()}
						{getUpdateGoals()}					
						
					</Col>
				</Row>
			</Container>
		
	)
}

export default Dashboard;