import React, {useRef, useState} from 'react';
import { Form, Button, Card, Container, Alert, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../contexts/AuthContext";
import {useDatabase} from "../contexts/DatabaseContext";
import { Link, useNavigate } from 'react-router-dom';

export function UpdateGoals() {

	const {currentUser} = useAuth();
	const [loading, setLoading] = useState(false);
	const {firstName, lastName, gender, age, height, currentWeight, goalWeight} = useDatabase();

	function handleSubmit(e) {
		e.preventDefault();

	}

	return (
			<>
				<Row className="breadcrumbs"> 
					<h5>User Settings</h5>
				</Row>
				<Container className="calendarPanel" fluid>
					<Row className="float-left dashboardPanel">
						<Form onSubmit={handleSubmit}>
						<Row className="innerRow"> 
								<h5><u>Your Goals</u></h5>
							</Row>
								<Form.Group>
									<Form.Label>Starting Weight</Form.Label>
									<Form.Control type="number" placeholder={currentWeight} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Goal Weight</Form.Label>
									<Form.Control type="number" placeholder={goalWeight} />
								</Form.Group>

							<Row className="innerRow"> 
								<h5><u>Update User Information</u></h5>
							</Row>

							<Form.Group>
									<Form.Label>First Name</Form.Label>
									<Form.Control type="text" placeholder={firstName} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Last Name</Form.Label>
									<Form.Control type="text" placeholder={lastName} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Gender</Form.Label>
									<Form.Control type="Number" placeholder={gender} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Age</Form.Label>
									<Form.Control type="Number" placeholder={age} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Height</Form.Label>
									<Form.Control type="Number" placeholder={height} />
								</Form.Group>
								<Button disabled={loading} style={{marginTop: '10px'}} type="submit" className="w-100">Update</Button>
						</Form>
					</Row>
				</Container>
			</>
	)
}

export default UpdateGoals;