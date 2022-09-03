import React, { useState, useEffect } from 'react';

import { getDucks } from '../../app/actions';

import Header from '../Header.js';
import Quiz from '../Quiz/Quiz.js'
import DuckDirectory from '../Directory/DuckDirectory.js';
import DuckAlterEgo from '../DuckAlterEgo/DuckAlterEgo.js'
import initial from '../../app/initial';

import { useSelector, useDispatch } from 'react-redux';

import '../../styles/index.css';

function App(props) {
	const dispatch = useDispatch();
	const ducks = useSelector(state => state.ducks);
	const ducksLoaded = useSelector(state => state.ducksLoaded);
	const quizComplete = useSelector(state => state.quizComplete);
	const duckAlterEgo = useSelector(state => state.duckAlterEgo);
	const showAllDucks = useSelector(state => state.showAllDucks);


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



	return (
		<div className='app-container'>
			<Header />
			{
				!quizComplete ? (
				!ducksLoaded ?
					<p>one sec, the ducks are on their merry way!!</p>
				: 
					<Quiz />
			) : (
				!showAllDucks ? (
					<DuckAlterEgo duckAlterEgo={duckAlterEgo} />
				) : (
					<DuckDirectory ducks={ducks} />
				)
			)}
		</div>
	)
}

export default App;
