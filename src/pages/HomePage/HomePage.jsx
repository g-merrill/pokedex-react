import React from 'react';
import pokeball from '../../pokeball.svg';
import './HomePage.css';

const HomePage = (props) => {
	return (
		<div className="HomePage">
			<img src={pokeball} className="HomePage-logo" alt="pokeball" />
		</div>
	);
};

export default HomePage;