import React, { useContext, useState, useEffect } from 'react';
import firebase from '../firebase';

export const DatabaseContext = React.createContext()

export function useDatabase() {
  return useContext(DatabaseContext)
}

export function DatabaseProvider({children}) {

//State and variables
	const [userDetailsList, setUserDetailsList] = useState();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState();
	const [height, setHeight] = useState();
	const [currentWeight, setCurrentWeight] = useState();
	const [goalWeight, setGoalWeight] = useState();

useEffect(() => {
		const detailsRef = firebase.database().ref('UserDetails');
		detailsRef.on("value", (snapshot)=> {
			const userDetails = snapshot.val();
			const userDetailsList = [];

			for (let id in userDetails) {
				userDetailsList.push(userDetails[id]);
			}
			setUserDetailsList(userDetailsList);
		});
	}, []);


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
	goalWeight
}



	return (
		<DatabaseContext.Provider value ={value}>
				{children}
		</DatabaseContext.Provider>
	)
}