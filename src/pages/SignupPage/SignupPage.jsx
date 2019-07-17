import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
	}

	updateMessage = (msg) => {
		this.setState({ message: msg });
	}

	render() {
		return (
			<div className='SignupPage'>
				<SignupForm {...this.props} updateMessage={this.updateMessage} />
				{this.state.message ? <p className="alert alert-danger">{this.state.message}</p> : null}
			</div>
		);
	}
}

export default SignupPage;

