import React from 'react';
import logo from '../../logo.svg';
import './HomePage.css';

const HomePage = (props) => {
	return (
		<div className="HomePage">
			<img src={logo} className="HomePage-logo" alt="pokeball" />
		</div>
	);
};

export default HomePage;