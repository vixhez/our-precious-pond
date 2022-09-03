import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function DisplayAllDucks(props) {
	function toggleDuckInfo(event) {
        event.preventDefault();

		let duckInfo = event.target.parentElement.querySelector('.duck__bio');
		
		if (duckInfo.clientHeight === 0) {
			event.target.textContent = 'Read less';
			duckInfo.style.display = 'block';
		} else {
			event.target.textContent = 'Read more';
			duckInfo.style.display = 'none';
		}
    }
	return (
		<div className="duck-directory__container">
			{props.ducks.map((duck) => {
				return (
					<div className="duck-directory__duck" key={duck.id}>
						<img className="duck__img" src={require(`../../assets/ducks/featured-species/${duck.assets[0]}`)} />
						<div className="duck__stats">
							<span className="duck__common-name">
								{duck.common_name}
								</span>
							<span className="duck__latin-name">
								<span className="duck__stats--underline">
									Latin name: 
								</span> <span>
									{duck.latin_name}
								</span>
							</span>
							<span className="duck__location">
								<span className="duck__stats--underline">
									Location:
								</span> <span>
									{duck.location}
								</span>
							</span>
							<span className="duck__pop-size">
								<span className="duck__stats--underline">
									Population:
								</span> <span>
									{duck.pop_size}
								</span>
							</span>
							<span className="duck__status">
								{duck.status}
							</span>
						</div>
						<button
							onClick={toggleDuckInfo}
						>
							Read more
						</button> 
						<div className="duck__bio">
							<div className="duck__overview">
								{duck.bio}
							</div>
							<div className="duck__threats">
								{duck.threats}
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}