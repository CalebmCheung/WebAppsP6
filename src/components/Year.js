import React, {Component} from 'react';
import Term from './Term';

class Year extends Component {
	
	

	render (){

		/*var start = true;
		var html = "";

		for (var key in this.props.plan.years) {
			var year = this.props.plan.years[key];
			
			if (!start){
				html += "<div class=\"sem\">";

				html += "<span style=\"font-weight:bold\" class=\"semyr\">Spring " + key + "</span>";
				var semCredits = 0;
				var temp = "";
				for (var c in year.spring) {
					var course = year.spring[c];
					temp += "<span class=\"classes\">" + course.code + "   " + course.name + "</span>";
					semCredits += course.credits;
				}
				html +="<span class =\"semCred\">Credits: " + semCredits +"</span>";
				html += temp;
			
				//this.props.totCredits += semCredits;
				temp = "";
				semCredits = 0;
				
				html += "</div>t";
				html += "<div class=\"sem\">";
				html += "<span style=\"font-weight:bold\" class=\"semyr\">Summer " + key + "</span>";
				for (var c in year.summer) {
					var course = year.summer[c];
					temp += "<span class=\"classes\">" + course.code + "   " + course.name + "</span>";
					semCredits += course.credits;
				}
				html +="<span class =\"semCred\">Credits: " + semCredits +"</span>";
				html += temp;
				temp = "";
				//this.props.totCredits += semCredits;
				semCredits = 0;
				html += "</div>";
			}
			if(!(Object.keys(year.fall).length === 0)){
				html += "<div class=\"sem\">";
				html += "<span style=\"font-weight:bold\" class=\"semyr\">Fall " + key + "</span>";

				var temp = "";
				var semCredits = 0;

				for (var c in year.fall) {
					var course = year.fall[c];
					temp += "<span class=\"classes\">" + course.code + "   " + course.name + "</span>";
					semCredits += course.credits;
				}
				html +="<span class =\"semCred\">Credits: " + semCredits +"</span>";
				html += temp;
				//this.props.totCredits += semCredits;
				html += "</div>";
			}
			start = false;
		}
		return(<div>{html}</div>);*/
		//if(this.props.year == 1 || this.props.year == 2 || this.props.year == 3){ 
			return (
				<div class="Year">
					<Term year={this.props.data[0]} catalog={this.props.catalog} setTotCredits={this.props.setTotCredits} data={this.props.data[1].fall} term="Fall" />
					<Term year={this.props.data[0]} catalog={this.props.catalog} setTotCredits={this.props.setTotCredits} data={this.props.data[1].spring} term="Spring" />
					<Term year={this.props.data[0]} catalog={this.props.catalog} setTotCredits={this.props.setTotCredits} data={this.props.data[1].summer} term="Summer" />
				</div>
			);
		//}
		/*else if (this.props.year == 0){
			return (
				<div class= "Year">
					<Term year ={this.props.year} catalog={this.props.catalog} data={this.props.data[1].fall} term="Fall" />
				</div>
			);
		}
		else {
			return (
				<div class="Year">
					<Term year={this.props.year} catalog={this.props.catalog} data={this.props.data[1].spring} term="Spring" />
					<Term year={this.props.year} catalog={this.props.catalog} data={this.props.data[1].summer} term="Summer" />
				</div>
			);
		}*/
	 }
}

export default Year;