import React, { useContext, useState, useEffect } from 'react';
import firebase from '../firebase';
import { useAuth } from "../contexts/AuthContext";

export const DatabaseContext = React.createContext()

export function useDatabase() {
  return useContext(DatabaseContext)
}

export function DatabaseProvider({children}) {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState();
	const [height, setHeight] = useState();
	const [currentWeight, setCurrentWeight] = useState();
	const [goalWeight, setGoalWeight] = useState();
	const { currentUser, logout } = useAuth();

//Get data from database
useEffect(() => {
		const detailsRef = firebase.database().ref('UserDetails');
		detailsRef.child(currentUser.uid).get().then((snapshot) => {

			if(snapshot.exists()) {
				setFirstName(snapshot.val().firstName);
				setLastName(snapshot.val().lastName);
				setGender(snapshot.val().gender);
				setAge(snapshot.val().age);
				setHeight(snapshot.val().height);
				setCurrentWeight(snapshot.val().currentWeight);
				setGoalWeight(snapshot.val().goalWeight);
			} else {
				console.log('No data available');
			}
			

		});
	}, []);


const value = {
	firstName,
	lastName,
	gender,
	age,
	height,
	currentWeight,
	goalWeight,
}

	return (
		<DatabaseContext.Provider value ={value}>
				{children}
		</DatabaseContext.Provider>
	)
}