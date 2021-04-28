import React, {Component} from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Ape from './Ape';
import Login from './Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}


	render(){
			return(
				<div className="containter mt-3">
					<Router>
						<Switch>
							<Route exact path="/" component={Ape} />
							<Route exact path="/Login" component={Login} />
						</Switch>
					</Router>
				</div>
			);
	}
}

export default App;
