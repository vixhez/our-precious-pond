import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";

export default function DisplayDuckAlterEgo(props) {
    let { duckAlterEgo } = props;

    const extroversionScore = useSelector(state => state.extroversionScore);
    const vibranceScore = useSelector(state => state.vibranceScore);
    const generosityScore = useSelector(state => state.generosityScore);
    const activenessScore = useSelector(state => state.activenessScore);

	return (
		<div className="duck-alterego__container">
            <h2>You are a {duckAlterEgo.common_name}!</h2>
            <div className="user-scores">
                You...
                Extroversion: {extroversionScore}
                Vibrance: {vibranceScore}
                Generosity: {generosityScore}
                Activeness: {activenessScore}
            </div>
            <div className="duck-alterego-scores">
                The {duckAlterEgo.common_name}...
                Extroversion: {duckAlterEgo.extroversion_score}
                Vibrance: {duckAlterEgo.vibrance_score}
                Generosity: {duckAlterEgo.generosity_score}
                Activeness: {duckAlterEgo.activeness_score}
            </div>
			<div className="duck-alterego__stats">
                <span className="duck-alterego__latin_name">{duckAlterEgo.latin_name}</span>
                <span className="duck-alterego__location">{duckAlterEgo.location}</span>
                <span className="duck-alterego__pop_size">{duckAlterEgo.pop_size}</span>
                <span className="duck-alterego__status">{duckAlterEgo.status}</span>
            </div>
            <div className="duck-alterego__gallery">
                {duckAlterEgo.assets.map(asset => {
                    // console.log(duckAlterEgo.assets);
                    // console.log(asset)
                    return (
                        <img className="duck-alterego-gallery__item" src={require(`../../assets/ducks/featured-species/${asset}`)} />
                    )
                })}
            </div>
            <div className="duck-alterego__bio">
                <span className="duck-alterego__bio">{duckAlterEgo.bio}</span>
                <span className="duck-alterego__threats">{duckAlterEgo.threats}</span>
            </div>            
		</div>
	)
}



// update the way that scores are rendering - turn into a loop?