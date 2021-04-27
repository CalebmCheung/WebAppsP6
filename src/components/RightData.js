import React, {Component} from 'react';
class RightData extends Component {

    render(){
        var y = this.props.catalog.year;
        var t = this.props.plans[0].currTerm;
        var c = this.props.totCredits;
        return(
            <div class="right_info">
                <label id="curr_year">Curr. Year: {y}</label><br/>
                <label id="curr_term">Curr. Term: {t}</label><br/>
                <label id="totalCredits">Total Credits: {c}</label><br/>
            </div>
        );
    }
}

export default RightData;