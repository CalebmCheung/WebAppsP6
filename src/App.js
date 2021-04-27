import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Ape from './Ape';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}


	render(){
		return (
			<div>
				<Ape/>
			</div>
		);
	}

}

export default App;
