import './styles.css';
import React from 'react';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import FTUDetails from './components/FTUDetails';
import { DatabaseProvider } from './contexts/DatabaseContext';


/*
NOTES:
npm install
npm install react-calendar
npm install i firebase
npm install react-bootstrap bootstrap@5.1.3
npm i react-router-dom
npm i bootstrap-icons


TODO:
1. If they click on a different month, alert them that they can't mark as complete.
2. Database to keep track of completed dates.
3. Database for loging in.
4. Database to store user details
5. Database to store workout goals
6. Database to store workouts

git fetch --all
git reset --hard origin/main

*/

const App = () => {

return (
	<>
				<Router>
					<AuthProvider>
					<DatabaseProvider>
						 <Routes>
						 	<Route exact path ="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
						 	<Route path ="/update-profile" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
							<Route path="/goals" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
							<Route path="/calendar" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
							<Route path="/update-goals" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
							<Route path="/basic-info" element={<PrivateRoute><FTUDetails/></PrivateRoute>} />
						 </Routes>
					</DatabaseProvider>
					</AuthProvider>
				</Router>
	</>
	
	
	);
}

export default App;
