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

                <label for="PlanSelect">Select Plan:</label>
                <select name="PlanSelect" id="PlanSelect" onChange ={() => this.props.setPlanNum(0)}>
                    <option value="plan1">Plan 1</option>
                    <option value="plan2">Plan 2</option>
                </select>
            </div>

            
        );
    }
}

export default RightData;