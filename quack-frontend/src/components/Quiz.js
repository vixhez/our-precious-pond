import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function DisplayQuiz() {
    const dispatch = useDispatch();

	const [quizContent, setQuizContent] = useState([]);
    
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

	useEffect(() => {
		async function getQuestions() {
			const response = await axios.get(`https://eu-west-1.aws.data.mongodb-api.com/app/application-0-uwitl/endpoint/duck_quiz`);
            const quizContent = await response.data;
				
			setQuizContent(quizContent);
		}
	
		getQuestions();
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

        setUserScores(state => {
            return {
                ...state,
                [stateValue]: scoreValue
            }
        })
    }

    function handleQuizCompletion(event) {
        event.preventDefault();
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
        <form className="quiz">
            {renderQuiz()}

            <button
                className="button__submit-quiz"
                onClick={handleQuizCompletion}
            >
                Who am I?!
            </button>
        </form>
    )
}