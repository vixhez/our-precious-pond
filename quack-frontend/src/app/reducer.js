import { useReducer } from "react";
import initial from './initial';
import './actions.js';

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
        case 'QUIZ_INPUT_SELECTED': return {
            ...state,
            [action.payload.key]: action.payload.value * 2.5
        }
        case 'QUIZ_COMPLETED': return {
            ...state,
            quizComplete: true
        }
        default:
            return state
    }
 };

export default reducer;