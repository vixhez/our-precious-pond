import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function DisplayAllDucks() {
	const [ducks, setDucks] = useState([]);
	
	// This method fetches the records from the database.
	useEffect(() => {
		async function getDucks() {
			let response = await fetch(`http://localhost:5000/duck_info`);
	
			if (!response.ok) {
				const message = `An error occured: ${response.statusText}`;
				window.alert(message);
				return;
			}	
				
			let ducks = await response.json();
			setDucks(ducks);
		}
	
		getDucks();
		// return; 
	}, [ducks.length]);

	return (
		<div className="duck-directory__container">
			{ducks.map((duck) => {
				return (
					<div className="duck-directory__duck" key={duck.id}>
						<span className="duck__common-name">{duck.common_name}</span>
						<span className="duck__latin-name">{duck.latin_name}</span>
						<span className="duck__bio">{duck.bio}</span>
					</div>
				)
			})}
		</div>
	)
}