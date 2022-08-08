import React, { useState, useEffect } from 'react';

import Quiz from '../Quiz/Quiz.js'
import DuckDirectory from '../Directory/DuckDirectory.js';
import initial from '../../app/initial';

import { useSelector } from 'react-redux';

function App(props) {
	const quizComplete = useSelector(state => state.quizComplete);
	console.log('boudn for the redux quiz ocmplete', quizComplete);
	// const [quizComplete, setQuizComplete] = useState(false);
	// console.log('quiz complete', quizComplete)


	// useEffect(() => {
	// 	// console.log('quuuuiiiizc omplete', quizComplete);

	// }, [quizComplete]);
	return !quizComplete ? (
			<>
				<p>ello ello ello, it's the quiz</p>
				<Quiz />
			</>
		) : (
			<>
				<p>eyup it's the directory</p>
				<DuckDirectory />
			</>
		)
}

export default App;
