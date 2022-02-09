import React, { useRef, useEffect} from 'react';
import '../styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import {useDatabase} from "../contexts/DatabaseContext";
import { auth } from "../firebase"

const FTUDetails = (props) => {

	const {currentUser, writeUserData} = useAuth();
	const firstName = useRef();
	const lastName = useRef();
	const gender = useRef();
	const age = useRef();
	const height = useRef();
	const currentWeight = useRef();
	const goalWeight = useRef();
	const navigate = useNavigate();
	const { setFirstName } = useDatabase();

	function handleSubmit(e) {
		e.preventDefault();
		var user = {
			firstName: firstName.current.value,
			lastName: lastName.current.value,
			gender: gender.current.value,
			age: age.current.value,
			height: height.current.value,
			currentWeight: currentWeight.current.value,
			goalWeight: goalWeight.current.value,
			uid: currentUser.uid,
			email: currentUser.email
		}
		writeUserData(user);
		setFirstName(null)
		navigate('/');	
	}


	return (
		<>
			<Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
				<div className="w-100" style={{maxWidth: '400px'}}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Welcome!<br /> Let's get some basic info.</h2>
							<Form onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label>First Name</Form.Label>
									<Form.Control ref={firstName} type="text" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Last Name</Form.Label>
									<Form.Control ref={lastName} type="text" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Gender</Form.Label>
									<Form.Control ref={gender} type="text" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Age</Form.Label>
									<Form.Control ref={age} type="number" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Height</Form.Label>
									<Form.Control ref={height} type="number" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Current Weight</Form.Label>
									<Form.Control ref={currentWeight} type="number" required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Goal Weight</Form.Label>
									<Form.Control ref={goalWeight} type="number" required />
								</Form.Group>

								<Button style={{marginTop: '10px'}} type="submit" className="w-100">Let's Go!</Button>
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
