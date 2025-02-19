import React, { useState, useEffect } from 'react';

import { getDucks } from '../app/actions';

import Header from './Header.js';
import Info from './Info.js';
import Quiz from './Quiz.js'
import DuckDirectory from './DuckDirectory.js';
import DuckAlterEgo from './DuckAlterEgo.js'
import initial from '../app/initial';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/index.css';

function App(props) {
	const dispatch = useDispatch();
	const ducks = useSelector(state => state.ducks);
	const ducksLoaded = useSelector(state => state.ducksLoaded);
	const quizComplete = useSelector(state => state.quizComplete);
	const duckAlterEgo = useSelector(state => state.duckAlterEgo);
	const showAllDucks = useSelector(state => state.showAllDucks);

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
		<div className='app__container'>
			<Header />
			<Info />
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
