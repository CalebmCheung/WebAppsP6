import React, {Component} from 'react';

class LowerLeft extends Component {
    render(){
        return(
            <div id="LL">
                <div id = "project">
                    <a href="http://judah.cedarville.edu/~kretsch/cs3220.html" id="PP">Return to Projects Page</a>
                </div>
                <div id="people">
                    <a href="https://csweb.cedarville.edu/peopleschoice/index.php" id="PC">Return to People's Choice</a>
                </div>
                <div id="logout">
                    <form action="http://judah.cedarville.edu/~kretsch/TermProject/Proj4.php" method="post">
                        <input type="submit" name ="submit" value="Log Out" id="LO"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default LowerLeft;