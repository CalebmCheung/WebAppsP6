import React, {Component} from 'react';

class Term extends Component {
	
	render (){
		/*const courseList = this.props.data;
        //let courseList = {};
		let courses = Object.entries(courseList).map(([key,value]) => {
		  	const courseName = key+ " " + this.props.catalog.courses[key].name;
		  	return (
				<p>
					{courseName}
				</p>
			);	
		});*/
		
		var courseName="";
        const courseList = this.props.data;
        let courses = Object.entries(courseList).map(([key,value]) => {
			courseName = Object.entries(this.props.catalog.courses).map((element) => {
				if(element[1].id == key){
					return (
						<p>{key + " " + element[1].name + " " + element[1].credits}</p>
					);
				}
			}); 
        });

		if(this.props.term != "Fall"){
			return (
			<div class="sem">
				<span class="semyr">{this.props.term} {parseInt(this.props.year) + 1}</span>
				<span class="cred"></span>
				{courseName}
			</div>
			);
		}
		else {
			return (
				<div class="sem">
					<span class="semyr">{this.props.term} {this.props.year}</span>
					<span class="cred"></span>
					{courseName}
				</div>
			);
		}
	}
}
export default Term;
