// export const updateUserScores = (state, action) => {
//     return {
//         type: "QUIZ_COMPLETED",
//         category: action.category,
//         score: action.score
//     }
// }

// export const activenessScoreUpdater = (state) => {
//     console.log('activness');
//     return {
//         type: "ACTIVENESS_SCORE_UPDATED",
//         state: state,
//     }
// }

// export const vibranceScoreUpdater = (state) => {
//     console.log('vibrance');
//     return {
//         type: "VIBRANCE_SCORE_UPDATED",
//         state: state,
//     }
// }

// export const generosityScoreUpdater = (state) => {
//     console.log('generosity');
//     return {
//         type: "GENEROSITY_SCORE_UPDATED",
//         state: state,
//     }
// }

// export const extroversionScoreUpdater = (state) => {
//     console.log('extroversion');
//     return {
//         type: "EXTROVERSION_SCORE_UPDATED",
//         state: state,
//     }
// }

// export const getDucks = (data) => {
//     async function getDucks() {
//         const dispatch = useDispatch();

//         let response = await fetch(`http://localhost:5000/duck_info`);

//         // if (!response.ok) {
//         // 	const message = `An error occured: ${response.statusText}`;
//         // 	window.alert(message);
//         // 	return;
//         // }	
            
//         let duckData = await response.json();
//         // setDucks(ducks);
//         dispatch({
//             type: 'DUCKS_LOADED',
//             duckData: duckData
//         })
//     }

//     getDucks();
// }