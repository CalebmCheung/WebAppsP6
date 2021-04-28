import React, {Component} from 'react';
import { Redirect } from 'react-router';

class LowerLeft extends Component {
    clearStorage(){
        localStorage.setItem("Login", "Nope");
    }
    render(){
        if(localStorage.getItem("Login") != "Yessir"){
			return (<Redirect to="/Login"/>);
        } else {
            return(
                <div id="LL">
                    <div id = "project">
                        <a href="http://judah.cedarville.edu/~kretsch/cs3220.html" id="PP">Return to Projects Page</a>
                    </div>
                    <div id="people">
                        <a href="https://csweb.cedarville.edu/peopleschoice/index.php" id="PC">Return to People's Choice</a>
                    </div>
                    <div id="logout">
                        <form onSubmit={this.clearStorage}>
                            <input type="submit" name ="submit" value="Log Out" id="LO"></input>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default LowerLeft;