import React, {Component} from 'react';
import Year from './Year';

class UpperRight extends Component {
	render(){
		var html = "";
			var start = true;
			this.props.totCredits = 0;
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
				
					this.props.totCredits += semCredits;
					temp = "";
					semCredits = 0;
					
					html += "</div>";
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
					this.props.totCredits += semCredits;
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
			this.props.totCredits += semCredits;
            html += "</div>";
			}
			start = false;
		}
		
		return (
			<div id="UR">
				{html}
			</div>
		);
	}

	// render (){
	//   var yrs = "";
	//   if (this.props.plan && this.props.plan.years) {
	// 	 yrs = this.props.plan.years.map((value, key) => {
	// 	  return (
	// 			<Year catalog={this.props.catalog} year={key} 
	// 			data={value} />
	// 		);		
	//   });
	//   }
	//   return (
	// 	<div id="UR">
	// 		<h3>My Plan</h3>
	// 		<div id="plan">
	// 			{yrs}
	// 		</div>
	// 	</div>
	//   );
	// }	
}

export default UpperRight;
