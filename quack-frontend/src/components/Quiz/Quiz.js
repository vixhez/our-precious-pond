import React, { useEffect, useState, useReducer } from "react";
import updateUserScores from '../../app/reducer.js';
import initial from '../../app/initial';
import { submitQuiz } from "../../app/actions.js";

// import { Link } from "react-router-dom";
// import '../index.js';

export default function DisplayQuiz() {
    
	const [quizContent, setQuizContent] = useState([]);
    const [state, dispatch] = useReducer(updateUserScores, initial);
	
	// This method fetches the records from the database.
	useEffect(() => {
		async function getQuestions() {
            console.log('get questions');
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

        console.log('render quiz');
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
                                // {(event) => {
                                //     let stateValue = `${event.target.value.split('-')[0]}Score`;
                                //     let scoreValue = parseInt(event.target.value.split('-')[1]);
                                //     dispatch({
                                //         type: "QUIZ_COMPLETED",
                                //         payload: {
                                //             key: stateValue,
                                //             value: scoreValue
                                //         }
                                //     })
                                // }}
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
        dispatch({
            type: "QUIZ_COMPLETED",
            payload: {
                key: stateValue,
                value: scoreValue
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

            <button type="submit">quack...</button>
        </form>
    )
}

// https://stackoverflow.com/questions/67260648/how-to-submit-the-form-data-into-an-array-using-usereducer-hook-i-have-to-get

// https://stackoverflow.com/questions/46138145/where-should-functions-in-function-components-go refer to this for structure

// look into how to stop re-rendering on load https://linguinecode.com/post/how-to-avoid-multiple-re-renders-in-react-shouldcomponentupdate 

//https://medium.com/@katestamas/dynamically-update-states-in-react-7558287e5fb9

// https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name