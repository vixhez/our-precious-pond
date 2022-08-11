import { useReducer } from "react";
import initial from './initial';
// import './actions.js';

// const handleUserScores = (state, action) => ({
//     ...state,
//     activenessScore: state.activenessScore + action.scores.activeness_1 + action.scores.activeness_2,
//     // vibranceScore: state.vibranceScore + action.data.vibrance_1 + action.data.vibrance_2,
//     // generosityScore: state.generosityScore + action.data.generosity_1 + action.data.generosity_2,
//     // extroversion: state.extroversionScore + action.data.extroversion_1 + action.data.extroversion_2
//  });

// export default handleUserScores;


const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DUCKS': 

           
            return {
                ...state,
                ducks: action.duckData,
                ducksLoaded: true

            }
			// dispatch({
			// 	type: 'DUCKS_LOADED',
			// 	duckData: duckData
			// })
        
        // case 'DUCKS_LOADED': return {
        //     ...state,
        //     ducks: action.duckData,
        //     ducksLoaded: true
        // }
        case 'QUIZ_INPUT_SELECTED': return {
            ...state,
            [action.payload.key]: action.payload.value * 2.5
        }
        case 'CALCULATE_DUCK_ALTEREGO': {
            console.log('hey in reducer for calculating duckos');
            console.log(state);

            let extroversionScore = state.extroversion0Score + state.extroversion1Score;
            let vibranceScore = state.vibrance0Score + state.vibrance1Score;
            let generosityScore = state.generosity0Score + state.generosity1Score;
            let activenessScore = state.activeness0Score + state.activeness1Score;

            console.log('ex', extroversionScore);
            console.log('vib', vibranceScore);
            console.log('gen', generosityScore);
            console.log('act', activenessScore);

            console.log(state.ducks);

            state.ducks.map(duck => console.log(duck));

            function findDuckAlterEgo(duck) {
                console.log('inside find duck alter ego', duck);

                console.log(Math.abs(extroversionScore - duck.extroversion_score))
                console.log(Math.abs(vibranceScore - duck.vibrance_score))
                console.log(Math.abs(generosityScore - duck.generosity_score))
                console.log(Math.abs(activenessScore - duck.activeness_score))


                return (Math.abs(extroversionScore - duck.extroversion_score) < 5 && Math.abs(vibranceScore - duck.vibrance_score) < 5 && Math.abs(generosityScore - duck.generosity_score) < 5 && Math.abs(activenessScore - duck.activeness_score) < 5);

            }
            let duckAlterEgo = state.ducks.filter(findDuckAlterEgo)[0];

            console.log('duck alter ego ! ! ! ! ! ! ! ! ! ', duckAlterEgo);




            return {
            ...state,
            quizComplete: true,
            duckAlterEgo: duckAlterEgo
        }
        }
        default:
            return state
    }
 };

export default reducer;