import React, { useState, useEffect } from 'react';

import { getDucks } from '../../app/actions';

import Quiz from '../Quiz/Quiz.js'
import DuckDirectory from '../Directory/DuckDirectory.js';
import initial from '../../app/initial';

import { useSelector, useDispatch } from 'react-redux';

function App(props) {
	const dispatch = useDispatch();
	const ducks = useSelector(state => state.ducks);
	const ducksLoaded = useSelector(state => state.ducksLoaded);
	const quizComplete = useSelector(state => state.quizComplete);
	const duckAlterEgo = useSelector(state => state.duckAlterEgo);


	// const [ducks, setDucks] = useState([]);
	
	// This method fetches the records from the database.
	useEffect(() => {
		async function getDucks() {
			let response = await fetch(`http://localhost:5000/duck_info`);
	
			if (!response.ok) {
				return;
			}	
				
			let duckData = await response.json();
			// setDucks(ducks);
			dispatch({
				type: 'GET_DUCKS',
				duckData: duckData
			})
		}
	
		getDucks(); 
	}, []);



	return !quizComplete ? (
		!ducksLoaded ?
			<p>one sec, the ducks are on their merry way!!</p>
		: 
			<>
				<p>ello ello ello, it's the quiz</p>
				<Quiz />
			</>
	) : (
		<>
			<p>you are a ....... {duckAlterEgo.common_name}!</p>

			<p>eyup it's the directory</p>
			<DuckDirectory ducks={ducks} />
		</>
	)
}

export default App;
