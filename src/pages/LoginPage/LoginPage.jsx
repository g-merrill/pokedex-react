import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css';

class LoginPage extends Component {
	
	state = {
		email: '',
		pw: '',
		message: ''
	};

	handleChange = (e) => {
		this.updateMessage('');
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await userService.login(this.state);
			// Let <App> know a user has signed up!
			this.props.handleSignupOrLogin();
			// Successfully logged in
			this.props.history.push('/pokedex');
		} catch (err) {
			// Can use a modal, toast or use err.message
			this.updateMessage('Invalid Credentials!');
		}
	}

	updateMessage = (msg) => {
		this.setState({ message: msg });
	}

	render() {
		return (
			<div className="LoginPage">
				<header className="header-footer">Log In</header>
				<form className="form-horizontal" onSubmit={this.handleSubmit} >
					<div className="form-group">
						<div className="col-sm-12">
							<input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12 text-center">
							<button className="btn btn-success">Log In</button>&nbsp;&nbsp;&nbsp;
							<Link to='/'>Cancel</Link>
						</div>
					</div>
				</form>
				{this.state.message ? <p className="alert alert-danger">{this.state.message}</p> : null}
			</div>
		);
	}
}

export default LoginPage;

