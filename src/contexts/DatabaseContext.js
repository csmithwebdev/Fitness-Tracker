import React, { useContext, useState, useEffect } from 'react';
import firebase from '../firebase';

export const DatabaseContext = React.createContext()

export function useDatabase() {
  return useContext(DatabaseContext)
}

export function DatabaseProvider({children}) {

	const [userDetailsList, setUserDetailsList] = useState();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState();
	const [height, setHeight] = useState();
	const [currentWeight, setCurrentWeight] = useState();
	const [goalWeight, setGoalWeight] = useState();
	const [id, setId] = useState();

//Get data from database
useEffect(() => {
		const detailsRef = firebase.database().ref('UserDetails');
		detailsRef.on("value", (snapshot)=> {
			const userDetails = snapshot.val();
			const userDetailsList = [];

			for (let id in userDetails) {
				userDetailsList.push({id, ...userDetails[id]});
			}
			setUserDetailsList(userDetailsList);
		});
	}, []);

//Create new array of data and set each datapoint as it's own state variable
	useEffect(() => {
		if (userDetailsList) {
		const ud = userDetailsList.map((details) => {
		setFirstName(details.firstName);
		setLastName(details.lastName);
		setGender(details.gender);
		setAge(details.age);
		setHeight(details.height);
		setCurrentWeight(details.currentWeight);
		setGoalWeight(details.goalWeight);
		setId(details.id);
		});
		return ud;
		}
	})

	function userFirstName(firstName) {
		return firstName;
	}

const value = {
	firstName,
	lastName,
	gender,
	age,
	height,
	currentWeight,
	goalWeight,
	id
}

	return (
		<DatabaseContext.Provider value ={value}>
				{children}
		</DatabaseContext.Provider>
	)
}