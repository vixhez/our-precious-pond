import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Header from './Header.js';
import Info from './Info.js';
import Quiz from './Quiz.js'
import DuckDirectory from './DuckDirectory.js';
import DuckAlterEgo from './DuckAlterEgo.js'
import HitCounter from './HitCounter.js';

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
			const response = await axios.get(`https://eu-west-1.aws.data.mongodb-api.com/app/application-0-uwitl/endpoint/duck_info`);
    		const duckData = await response.data;

			dispatch({
				type: 'GET_DUCKS',
				duckData: duckData
			})
		}
	
		getDucks(); 
	}, []);

	return (
		<>
			<div className='app__container'>
				<Header />
				<Info />
				{
					!quizComplete ? (
						!ducksLoaded ?
							<p>The ducks are on their merry way!</p>
						: 
							<Quiz />
					) : (
						!showAllDucks ? (
							<DuckAlterEgo duckAlterEgo={duckAlterEgo} />
						) : (
							<DuckDirectory ducks={ducks} />
						)
					)
				}
			</div>
			<HitCounter />
		</>
	)
}

export default App;
