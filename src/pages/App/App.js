import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import PokedexPage from '../PokedexPage/PokedexPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// Initialize user if there's a token, otherwise null
			user: userService.getUser()
		};
	}


	/*--- Callback Methods ---*/

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	}

	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	}


	/*--- Lifecycle Methods ---*/
	// add any other necessary auth

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Pokédex Lite</h1>
					<NavBar user={this.state.user} handleLogout={this.handleLogout} />
				</header>
				<Switch>
					<Route exact path='/' render={() =>
						<HomePage />
					}/>
					<Route exact path='/pokedex' render={() => (
						userService.getUser() ?
						<PokedexPage />
						:
						<Redirect to='/login' />
					)}/>
					<Route exact path='/signup' render={({ history }) => 
						<SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
					}/>
					<Route exact path='/login' render={({ history }) => 
						<LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
					}/>
				</Switch>
			</div>
		);
	}
}

export default App;
