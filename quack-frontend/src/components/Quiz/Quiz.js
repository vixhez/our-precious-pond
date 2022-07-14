import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import '../index.js';

export default function DisplayQuiz() {
	const [quizContent, setQuizContent] = useState([]);
	
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
            quizItems.map(quizItem => {
                let answersQuantity = Object.keys(quizItem).filter(key => key.includes('answer')).length;

                let quizItemAnswers = [];
                for (let i = 0; i < answersQuantity; i++) {
                    let currentAnswer = `answer_${i+1}`;
                    quizItemAnswers.push(
                        <div className={`quiz-answer_${i}`}>
                            <input
                                onChange={() => console.log('0101010')}
                                type="radio"
                                id={`${Object.keys(quizCategory)[1]}-answer-${i}`}
                                name={`${Object.keys(quizCategory)[1]}-answer-${i}`}
                                value="high"
                            />
                            <label htmlFor={`${Object.keys(quizCategory)[1]}-answer-${i}`}>
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
                            <div className="quiz__answers">
                                {quizItemAnswers}
                            </div>
                        </div>

                </>
                );

            })
        })

        return quiz;
    }

    return (
        <div className="quiz">
            {renderQuiz()};
        </div>
    )
}