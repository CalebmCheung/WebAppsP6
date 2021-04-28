import React, {Component} from 'react';
import Year from './Year';

class UpperRight extends Component {
	// render(){
	// 	var html = "";
	// 	var start = true;
	// 	//this.props.totCredits = 0;
		
		
	// 	return (
	// 		<div id="UR">
	// 			<Year plan={this.props.plan} catalog={this.props.catalog} totCredits={this.props.totCredits}/>
	// 		</div>
	// 	);
	// }

	render (){
	  	var yrs = "";
		if (this.props.plan && this.props.plan.years) {
		  	var info = Object.entries(this.props.plan.years);
			yrs = info.map((value, key) => {
		  	return (
				<Year catalog={this.props.catalog} year={key} data={value} setTotCredits={this.props.setTotCredits}/>
			);	
	  });
	  }
	  return (
		<div id="UR">
			{yrs}
		</div>
	  );
	}	
}

export default UpperRight;
