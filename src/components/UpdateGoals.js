import React, {useRef, useState} from 'react';
import { Form, Button, Card, Container, Alert, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../contexts/AuthContext";
import {useDatabase} from "../contexts/DatabaseContext";
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebase';

export function UpdateGoals({ userDetails }) {

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const {firstName, lastName, gender, age, height, currentWeight, goalWeight, id} = useDatabase();
	const [newCurrentWeight, setNewCurrentWeight] = useState();
	const [newGoalWeight, setNewGoalWeight] = useState();
	const [newFirstName, setNewFirstName] = useState();
	const [newLastName, setNewLastName] = useState();
	const [newGender, setNewGender] = useState();
	const [newHeight, setNewHeight] = useState();
	const [newAge, setNewAge] = useState();
	

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage('');
			const detailsRef = firebase.database().ref('UserDetails').child(id); //Update the database
			await detailsRef.update({firstName: newFirstName});
			await detailsRef.update({lastName: newLastName});
			await detailsRef.update({currentWeight: newCurrentWeight});
			await detailsRef.update({goalWeight: newGoalWeight});
			await detailsRef.update({gender: newGender});
			await detailsRef.update({height: newHeight,});
			await detailsRef.update({age: newAge});
			setMessage('Successfully updated your settings');
		} catch {
			setError('Failed to update profile');
		}
	}

	function getNewCurrentWeight(e) {
		setNewCurrentWeight(e.target.value);
	}

	function getNewGoalWeight(e) {
		setNewGoalWeight(e.target.value);
	}

	function getNewFirstName(e) {
		setNewFirstName(e.target.value);
	}

	function getNewLastName(e) {
		setNewLastName(e.target.value);
	}

	function getNewGender(e) {
		setNewGender(e.target.value);
	}

	function getNewHeight(e) {
		setNewHeight(e.target.value);
	}

	function getNewAge(e) {
		setNewAge(e.target.value);
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
						{message && <Alert variant="success">{message}</Alert>}
								<h5><u>Your Goals</u></h5>
							</Row>
								<Form.Group>
									<Form.Label>Starting Weight</Form.Label>
									<Form.Control onChange={getNewCurrentWeight} type="number" placeholder={currentWeight} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Goal Weight</Form.Label>
									<Form.Control onChange={getNewGoalWeight} type="number" placeholder={goalWeight} />
								</Form.Group>

							<Row className="innerRow"> 
								<h5><u>Update User Information</u></h5>
							</Row>

							<Form.Group>
									<Form.Label>First Name</Form.Label>
									<Form.Control onChange={getNewFirstName} type="text" placeholder={firstName} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Last Name</Form.Label>
									<Form.Control onChange={getNewLastName} type="text" placeholder={lastName} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Gender</Form.Label>
									<Form.Control onChange={getNewGender} type="Number" placeholder={gender} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Age</Form.Label>
									<Form.Control onChange={getNewAge} type="Number" placeholder={age} />
								</Form.Group>

								<Form.Group>
									<Form.Label>Height</Form.Label>
									<Form.Control onChange={getNewHeight} type="Number" placeholder={height} />
								</Form.Group>
								<Button disabled={loading} style={{marginTop: '10px'}} type="submit" className="w-100">Update</Button>
						</Form>
					</Row>
				</Container>
			</>
	)
}

export default UpdateGoals;