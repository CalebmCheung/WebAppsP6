import React, {Component} from 'react';
import './App.css';
import { Redirect } from 'react-router';

class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
			
		};
	}

    setLocalStorage(){
        localStorage.setItem("Login","Yessir");
    }

    render(){
        if(localStorage.getItem("Login") == "Yessir"){
			return (<Redirect to="/"/>);
        }
        else{
            return(
                <div className="App" id="loginBox">
                    <h2>APES Login</h2>
                    <form onSubmit={this.setLocalStorage}>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username"/><br/><br/>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" value=""/><br/><br/>
                        <input type="submit" name ="submit" value="Log In" id="LI"/>
                    </form>
                </div>
            );
        }
    }
}

export default Login;