import React, { useEffect, useState, useReducer } from "react";
import updateUserScores from '../../app/reducer.js';
import initial from '../../app/initial';
import { submitQuiz } from "../../app/actions.js";


import { useSelector, useDispatch } from 'react-redux';

// import { Link } from "react-router-dom";
// import '../index.js';

export default function DisplayQuiz() {
    const dispatch = useDispatch();

	const [quizContent, setQuizContent] = useState([]);
    // const [extroversion0Score, extroversion0ScoreUpdate] = useState(0);
    // const [extroversion1Score, extroversion1ScoreUpdate] = useState(0);
    // const [generosity0Score, generosity0ScoreUpdate] = useState(0);
    // const [generosity1Score, generosity1ScoreUpdate] = useState(0);
    // const [activeness0Score, activeness0ScoreUpdate] = useState(0);
    // const [activeness1Score, activeness1ScoreUpdate] = useState(0);
    // const [vibrance0Score, vibrance0ScoreUpdate] = useState(0);
    // const [vibrance1Score, vibrance1ScoreUpdate] = useState(0);
    
    const [userScores, setUserScores] = useState({
        extroversion0Score: 0,
        extroversion1Score: 0,
        generosity0Score: 0,
        generosity1Score: 0,
        activeness0Score: 0,
        activeness1Score: 0,
        vibrance0Score: 0,
        vibrance1Score: 0
    });



    // const [state, dispatch] = useReducer(updateUserScores, initial);
	
	// This method fetches the records from the database.
	useEffect(() => {
		async function getQuestions() {
			let response = await fetch(`http://localhost:5000/duck_quiz`);
	
			if (!response.ok) {
				const message = `An error occured: ${response.statusText}`;
				window.alert(message);
				return;
			}	
				
			let quizContent = await response.json();
			setQuizContent(quizContent);
		}
	
		getQuestions();
		// return; 
	}, [quizContent.length]);



    function renderQuiz() {
        let quiz = [];

        quizContent.map(quizCategory => {
            let quizItems = Object.values(quizCategory)[1];
            quizItems.map((quizItem, index) => {
                let answersQuantity = Object.keys(quizItem).filter(key => key.includes('answer')).length;

                let quizItemAnswers = [];
                for (let i = 0; i < answersQuantity; i++) {
                    let currentAnswer = `answer_${i+1}`;
                    quizItemAnswers.push(
                        <div className={`quiz__answer`}>
                            <input
                                onClick={handleInputClick}
                                type="radio"
                                id={`${Object.keys(quizCategory)[1]}-answer-${index}-${i}`}
                                name={`${Object.keys(quizCategory)[1]}${index}`}
                                value={`${Object.keys(quizCategory)[1]}-${i}`}
                            />
                            <label htmlFor={`${Object.keys(quizCategory)[1]}-answer-${index}`}>
                                {quizItem[currentAnswer]}
                            </label>
                        </div>
                    );
                }

                quiz.push(
                <>
                    <div className="quiz__item">
                        <div className="quiz__question">
                            {quizItem.question}
                        </div>
                            <div className="quiz__answers-container">
                                {quizItemAnswers}
                            </div>
                        </div>
                </>
                );
            })
        })

        return quiz;
    }

    function handleInputClick(event) {
        let stateValue = `${event.target.name}Score`;
        let scoreValue = parseInt(event.target.value.split('-')[1]);

        console.log('staet value', stateValue);
        console.log('score value', scoreValue);

        setUserScores(state => {
            return {
                ...state,
                [stateValue]: scoreValue
            }
        })

        
        
        // dispatch({
        //     type: 'QUIZ_INPUT_SELECTED',
        //     payload: {
        //         key: stateValue,
        //         value: scoreValue
        //     }
        // })

    }

    function handleQuizCompletion(event) {
        event.preventDefault();
        console.log(userScores);
        let extroversionScore = userScores.extroversion0Score + userScores.extroversion1Score;
        let generosityScore = userScores.generosity0Score + userScores.generosity1Score;
        let activenessScore = userScores.activeness0Score + userScores.activeness1Score;
        let vibranceScore = userScores.vibrance0Score + userScores.vibrance1Score;

        dispatch({
            type: 'CALCULATE_DUCK_ALTEREGO',
            payload: {
                extroversionScore: extroversionScore,
                generosityScore: generosityScore,
                activenessScore: activenessScore,
                vibranceScore: vibranceScore
            }
        })
    }

    return (
        <form
            className="quiz"
            // onSubmit={
            //     (event) => {
            //         event.preventDefault();
            //         dispatch({ type: "QUIZ_COMPLETED" })
            //     }
            // }
            >
            {renderQuiz()}

            <button
                onClick={handleQuizCompletion}
            >quack...</button>
        </form>
    )
}

// https://stackoverflow.com/questions/67260648/how-to-submit-the-form-data-into-an-array-using-usereducer-hook-i-have-to-get

// https://stackoverflow.com/questions/46138145/where-should-functions-in-function-components-go refer to this for structure

// look into how to stop re-rendering on load https://linguinecode.com/post/how-to-avoid-multiple-re-renders-in-react-shouldcomponentupdate 

//https://medium.com/@katestamas/dynamically-update-states-in-react-7558287e5fb9

// https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name