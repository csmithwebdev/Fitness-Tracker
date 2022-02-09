import '../styles.css';
import React from 'react';
import UserDetails from './UserDetails';
import {Container, Row} from 'react-bootstrap';


const Goals = (props) => {


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