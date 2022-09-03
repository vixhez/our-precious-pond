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
        // case 'QUIZ_INPUT_SELECTED': return {
        //     ...state,
        //     [action.payload.key]: action.payload.value * 2.5
        // }
        case 'CALCULATE_DUCK_ALTEREGO': {

            let extroversionScore = action.payload.extroversionScore * 2.5;
            let vibranceScore = action.payload.vibranceScore * 2.5;
            let generosityScore = action.payload.generosityScore * 2.5;
            let activenessScore = action.payload.activenessScore * 2.5;

            function findDuckAlterEgo() {
                // console.log('inside find duck alter ego', duck);

                let duckMatches = [];

                for (let i = 0; i < Object.entries(action.payload).length; i++) {
                    let currentTrait = Object.keys(action.payload)[i].split('Score')[0];
                    console.log('current trait', currentTrait);
                    let userTraitScore = Object.values(action.payload)[i] * 2.5;
                    console.log('user trait score', userTraitScore);

                    console.log('hello quack', state.ducks[3][`${currentTrait}_score`])

                    duckMatches.push(state.ducks.filter(duck => Math.abs(userTraitScore - duck[`${currentTrait}_score`]) < 3));
                }

                console.log('duck matches', duckMatches);
                console.log('duck matches flattened', duckMatches.flat())

                let flatDuckMatches = duckMatches.flat();
                let counts = {};
                
                let duckAlterEgo = flatDuckMatches.reduce((acc, currentValue) => {

                  counts[currentValue.common_name] ? counts[currentValue.common_name]++ : counts[currentValue.common_name] = 1;
                  
                  console.log('counts prev', counts[acc.common_name]);
                  console.log('general prev', acc);
                  console.log('counts current', counts[currentValue.common_name]);
                  console.log('general current', currentValue);

                  console.log('counts', counts);

                //   return acc > currentValue ? acc : currentValue;
                return counts[acc.common_name] > counts[currentValue.common_name] ? acc : currentValue;
                }, {})
                




                return duckAlterEgo;
            }
  

            // let duckAlterEgo = state.ducks.filter(findDuckAlterEgo);

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