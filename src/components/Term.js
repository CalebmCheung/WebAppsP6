import React, {Component} from 'react';

class Term extends Component {
	
	render (){
		const courseList = this.props.data;
        //let courseList = {};
		let courses = Object.entries(courseList).map(([key,value]) => {
		  	const courseName = key+ " " + this.props.catalog.courses[key].name;
		  	return (
				<p>
					{courseName}
				</p>
			);	
		});

		if(this.props.term != "Fall"){
			return (
			<div class="sem">
				<span class="semyr">{this.props.term} {parseInt(this.props.year) + 1}</span>
				<span class="classes">{courses}</span>
			</div>
			);
		}
		else {
			return (
				<div class="sem">
					<span class="semyr">{this.props.term} {this.props.year}</span>
					<span class="classes">{courses}</span>
				</div>
			);
		}
	}
}
export default Term;
