import React, { useState} from 'react';
import '../styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container, Alert} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import firebase from '../firebase';

const FTUDetails = (props) => {

	const {currentUser} = useAuth();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState('');
	const [height, setHeight] = useState('');
	const [currentWeight, setCurrentWeight] = useState('');
	const [goalWeight, setGoalWeight] = useState('');
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		const detailsRef = firebase.database().ref('UserDetails');
		const userDetails = {
			firstName,
			lastName, 
			gender, 
			age, 
			height, 
			currentWeight, 
			goalWeight
		}
		detailsRef.push(userDetails); //Push the data to our database
		navigate('/');	
	}

	function getFirstName(e) {
		setFirstName(e.target.value);
	}
	function getLastName(e) {
		setLastName(e.target.value);
	}
	function getGender(e) {
		setGender(e.target.value);
	}
	function getAge(e) {
		setAge(e.target.value);
	}
	function getHeight(e) {
		setHeight(e.target.value);
	}
	function getCurrentWeight(e) {
		setCurrentWeight(e.target.value);
	}
	function getGoalWeight(e) {
		setGoalWeight(e.target.value);
	}




	return (
		<>
			<Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
				<div className="w-100" style={{maxWidth: '400px'}}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Welcome!<br /> Let's get some basic info.</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label>First Name</Form.Label>
									<Form.Control onChange={getFirstName} type="text" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Last Name</Form.Label>
									<Form.Control onChange={getLastName} type="text" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Gender</Form.Label>
									<Form.Control onChange={getGender} type="text" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Age</Form.Label>
									<Form.Control onChange={getAge} type="number" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Height</Form.Label>
									<Form.Control onChange={getHeight} type="number" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Current Weight</Form.Label>
									<Form.Control onChange={getCurrentWeight} type="number" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Goal Weight</Form.Label>
									<Form.Control onChange={getGoalWeight} type="number" required />
								</Form.Group>

								<Button disabled={loading} style={{marginTop: '10px'}} type="submit" className="w-100">Let's Go!</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">
						<Link to="/">Cancel</Link>
					</div>
				</div>
			</Container>
		</>
		);
}

export default FTUDetails;
