import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function DisplayDuckAlterEgo(props) {
    const dispatch = useDispatch();
    let { duckAlterEgo } = props;

    const extroversionScore = useSelector(state => state.extroversionScore);
    const vibranceScore = useSelector(state => state.vibranceScore);
    const generosityScore = useSelector(state => state.generosityScore);
    const activenessScore = useSelector(state => state.activenessScore);

    useEffect(() => {
        let appContainer = document.querySelector('.app__container');
        appContainer.scrollTo(0, 0);
    }, [duckAlterEgo]);

    function showAllDucks(event) {
        event.preventDefault();

        dispatch({
            type: 'SHOW_ALL_DUCKS'
        })
    }

	return (
		<div className="duck-alterego__container">
            <h2>You are a {duckAlterEgo.common_name}!</h2>
            <div className="duck-alterego__info">
                <div className="scores__container">
                    <div className="user-scores">
                        <span className="user-scores__name">You</span>
                        <span className="user-scores__score">Extroversion: {extroversionScore}</span>
                        <span className="user-scores__score">Vibrance: {vibranceScore}</span>
                        <span className="user-scores__score">Generosity: {generosityScore}</span>
                        <span className="user-scores__score">Activeness: {activenessScore}</span>
                    </div>
                    <div className="duck-alterego-scores">
                        <span className="duck-alterego-scores__name">The {duckAlterEgo.common_name}</span>
                        <span className="duck-alterego-scores__score">Extroversion: {duckAlterEgo.extroversion_score}</span>
                        <span className="duck-alterego-scores__score">Vibrance: {duckAlterEgo.vibrance_score}</span>
                        <span className="duck-alterego-scores__score">Generosity: {duckAlterEgo.generosity_score}</span>
                        <span className="duck-alterego-scores__score">Activeness: {duckAlterEgo.activeness_score}</span>
                    </div>
                </div>
                <div className="duck-alterego__stats">
                    <div className="duck-alterego__latin_name"><span>Latin name:</span> {duckAlterEgo.latin_name}</div>
                    <div className="duck-alterego__location"><span>Location:</span> {duckAlterEgo.location}</div>
                    <div className="duck-alterego__pop_size"><span>Population:</span> {duckAlterEgo.pop_size}</div>
                </div>
            </div>
            <div className="duck-alterego__status">
                    <span>Conservation status:</span> <span className="status--underline">{duckAlterEgo.status}</span>
            </div>
            <div className="duck-alterego__gallery-bio">
                <div className="duck-alterego__gallery">
                    {duckAlterEgo.assets.map(asset => {
                        // console.log(duckAlterEgo.assets);
                        // console.log(asset)
                        return (
                            <img className="duck-alterego-gallery__item" src={require(`../assets/ducks/featured-species/${asset}`)} />
                        )
                    })}
                </div>
                <div className="duck-alterego__bio">
                    <div className="duck-alterego__general">
                        {duckAlterEgo.bio}
                    </div>
                    <div className="duck-alterego__threats">
                        <h6 className="duck-alterego-threats__title">Threats to the {duckAlterEgo.common_name}</h6>
                        {duckAlterEgo.threats}
                </div>
                </div>
            </div>
            <button
                className="button__show-all-ducks"
                onClick={showAllDucks}
            >
                Show all ducks
            </button>            
		</div>
	)
}



// update the way that scores are rendering - turn into a loop?