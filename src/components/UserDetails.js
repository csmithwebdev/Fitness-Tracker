import React, {useState, useEffect} from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import { useDatabase } from "../contexts/DatabaseContext";
import firebase from '../firebase';


const UserDetails = (props) => {

	const [userDetailsList, setUserDetailsList] = useState();
	const { firstName } = useDatabase();
	const { currentWeight } = useDatabase();
	const { goalWeight } = useDatabase();


	return (
		<div>
			<div className="two wide column userDetails">
					<h3>Hello, {firstName}</h3><br />
					<p>Successful days: </p>
					<p>Longest Streak: </p>
					<p>Failed days: </p>
					<p>Days until you hit your goal: </p>
			</div>
		</div>
		);
}

export default UserDetails;

