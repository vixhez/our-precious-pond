import { useReducer } from "react";
import initial from './initial';
// import './actions.js';

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DUCKS': 
            return {
                ...state,
                ducks: action.duckData,
                ducksLoaded: true

            }
        case 'CALCULATE_DUCK_ALTEREGO': {
            let extroversionScore = action.payload.extroversionScore * 2.5;
            let vibranceScore = action.payload.vibranceScore * 2.5;
            let generosityScore = action.payload.generosityScore * 2.5;
            let activenessScore = action.payload.activenessScore * 2.5;

            function findDuckAlterEgo() {
                let duckMatches = [];

                for (let i = 0; i < Object.entries(action.payload).length; i++) {
                    let currentTrait = Object.keys(action.payload)[i].split('Score')[0];
                    console.log('current trait', currentTrait);
                    let userTraitScore = Object.values(action.payload)[i] * 2.5;

                    duckMatches.push(state.ducks.filter(duck => Math.abs(userTraitScore - duck[`${currentTrait}_score`]) < 3));
                }

                let flatDuckMatches = duckMatches.flat();
                let counts = {};
                
                let duckAlterEgo = flatDuckMatches.reduce((acc, currentValue) => {
                    counts[currentValue.common_name] ? counts[currentValue.common_name]++ : counts[currentValue.common_name] = 1;
                    //   return acc > currentValue ? acc : currentValue;
                    return counts[acc.common_name] > counts[currentValue.common_name] ? acc : currentValue;
                }, {})
                
                return duckAlterEgo;
            }
  
            let duckAlterEgo = findDuckAlterEgo();
                return {
                ...state,
                quizComplete: true,
                extroversionScore: extroversionScore,
                generosityScore: generosityScore,
                activenessScore: activenessScore,
                vibranceScore: vibranceScore,
                duckAlterEgo: duckAlterEgo
            }
        }
        case 'SHOW_ALL_DUCKS': 
            return {
                ...state,
            showAllDucks: true

            }
        case 'RESTART_QUIZ':
            return {
                ...state,
                quizComplete: false,
                showAllDucks: false
            }
        default:
            return state
    }
 };

export default reducer;