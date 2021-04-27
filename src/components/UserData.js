import React, {Component} from 'react';
import LeftData from './LeftData';
import RightData from './RightData';

class UserData extends Component {
    render(){
        return(
            <div class ="user_Data" id="user_Data">
                <LeftData plans={this.props.plans}/>
                <RightData plans={this.props.plans} catalog={this.props.catalog} totCredits={this.props.totCredits}/>
            </div>
        );
    }
}

export default UserData;