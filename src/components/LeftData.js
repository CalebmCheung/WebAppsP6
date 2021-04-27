import React, {Component} from 'react';
class LeftData extends Component {

    render(){
        var n = this.props.plans[0].student;
        var m = this.props.plans[0].major;
        var c = this.props.plans[0].catYear;
        return(
            <div class="left_info">
                <label id="user_name">Name: {n}</label><br/>
                <label id="major">Major: {m}</label><br/>
                <label id="catalog_year">Catalog Year: {c}</label>
            </div>
        );
    }
}

export default LeftData;