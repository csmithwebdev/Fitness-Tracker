import React, {useRef, useState} from 'react';
import { Form, Button, Card, Container, Alert, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';



export default function UpdateProfile() {

	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const {currentUser, updatePassword, updateEmail} = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if(passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		const promises = [];
		setLoading(true);
		setError('');
		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value))
		} if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value))
		}

		Promise.all(promises).then(()=> {
			navigate('/');
		}).catch(() => {
			setError('Failed to update account');
		}).finally(() => {
			setLoading(false);
		})		
	}

	return(
		<>
		<Row className="breadcrumbs"> 
				<h5>Security Settings</h5>
			</Row>
			<Container className="calendarPanel" fluid>
				<Row className="float-left dashboardPanel">
							<h5><u>Update Email/Password</u></h5>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} />

								</Form.Group>

								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} placeholder ="Leave blank to keep the same" />
								</Form.Group>

								<Form.Group>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} placeholder ="Leave blank to keep the same"  />
								</Form.Group>
								<Button disabled={loading} style={{marginTop: '10px'}} type="submit" className="w-100">Update</Button>
							</Form>
				</Row>
			</Container>
		</>
			
		);
}


