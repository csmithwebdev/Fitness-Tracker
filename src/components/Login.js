import React, {useRef, useState} from 'react';
import { Form, Button, Card, Container, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import {useDatabase} from "../contexts/DatabaseContext";

export default function Login() {

	const emailRef = useRef();
	const passwordRef = useRef();
	const {login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { setFirstName } = useDatabase();

	async function handleSubmit(e) {
		e.preventDefault();
			try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			//setFirstName(null); //Causes re-render of first time user data from databasecontext.
				navigate('/');
				
		} catch {
			setError('Failed to login')
		}

		setLoading(false);
		
	}

	return(
		<>
			<Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
				<div className="w-100" style={{maxWidth: '400px'}}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Log In</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>
								<Button disabled={loading} style={{marginTop: '10px'}} type="submit" className="w-100">Log In</Button>
							</Form>

							<div className="w-100 text-center mt-2">
								<Link to="/forgot-password">Forgot Password?</Link>
							</div>

						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">
						Need an account? <Link to="/signup">Sign Up</Link>
					</div>
				</div>
			</Container>
		</>
			
		);
}


