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
        console.log('howdy, inside render quiz');

        let quiz = [];

        quizContent.map(quizCategory => {
            let quizItems = Object.values(quizCategory)[1];
            console.log('quiz items', quizItems)
            quizItems.map(quizItem => {
                console.log('quiz item', quizItem);
                let answersQuantity = Object.keys(quizItem).filter(key => key.includes('answer')).length;

                let quizItemAnswers = [];
                for (let i = 0; i < answersQuantity; i++) {
                    let currentAnswer = `answer_${i+1}`;
                    quizItemAnswers.push(
                    <p key={i}>{quizItem[currentAnswer]}</p>
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







    // return (



        // quizContent.map((quizCategory) => {
        //     // console.log(quizCategory);
        //     let quizItems = quizCategory[Object.keys(quizCategory)[1]];
        //     // console.log(quizItems);
        //     return (
        //         quizItems.map((quizItem) => {
        //             let answersQuantity = Object.keys(quizItem).filter(key => key.includes('answer')).length;
        //             console.log(quizItem);
        //             return (
        //                 <div className="quiz__item">
        //                     <div className="quiz-item__question">
        //                         <span>{quizItem.question}</span>
        //                     </div>
        //                     <ul className="quiz-item__answers">
        //                         {(() => {
        //                             let answers = [];
        //                             for (let i = 0; i < answersQuantity; i++) {
        //                                 let currentAnswer = `answer_${i+1}`;
        //                                 console.log('cuuurrrrent answer', currentAnswer);
        //                                 console.log('tryna access', quizItem[currentAnswer]);
        //                                 answers.push(<li>{quizItem[currentAnswer]}</li>);
        //                             }
        //                             return answers;
        //                         }
        //                         )()}

                                
                    //         </ul>
                    //     </div>
                    // )
                    // refactor above!!!
                        
                // }) 
            // )
            
        // })
    // )

    
}

// consider https://stackoverflow.com/questions/69767735/the-for-loop-inside-react here in terms of creating function outside of element and then calling it in element? related to having an index.js for files