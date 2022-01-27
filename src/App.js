import './styles.css';
import React, {useState, useEffect} from 'react';
import Signup from './components/Signup';
import Calendar from 'react-calendar';
import WorkoutLog from './components/WorkoutLog';
import UserDetails from './components/UserDetails';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';


/*
NOTES:
npm install
npm install react-calendar
npm install i firebase
npm install react-bootstrap bootstrap@5.1.3
npm i react-router-dom


TODO:
1. If they click on a different month, alert them that they can't mark as complete.
2. Database to keep track of completed dates.
3. Database for loging in.
4. Database to store user details
5. Database to store workout goals
6. Database to store workouts

*/

const App = () => {

return (
		
			
				<Router>
					<AuthProvider>
						 <Routes>
						 	<Route exact path ="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
						 	<Route path ="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
						 </Routes>
					</AuthProvider>
				</Router>
	);
}

export default App;
