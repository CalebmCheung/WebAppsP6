import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Term from './components/Term';
import UpperRight from './components/UpperRight'
//import Banner from './components/Banner';
//import UpperRight from './components/UpperRight';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  planList: null,
		  catalog: null,
		};
	}

  loadNewPlan(){

    fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getCombinedNoSession.php')
     .then(response => response.json())
     .then(		
       data => this.setState({plan: this.convertPlan(data.plan), planList: 
 data.planList, catalog: data.catalog})
       );
   
              fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getRequirementsNoSession.php')
     .then(response => response.json())
     .then(			
       data => this.setState({requirements: data})
     );
   }
   
 
   componentDidMount() {
     this.loadNewPlan();
   }
 
   convertPlan(currPlan) {
     // add your code from Proj#2 here
	 // test commit
 }
 
	render(){
	  return (
		<div className="App" id="main">
			{/*<Banner>*/}
			{/*<BannerRight planList={this.state.planList}/> */}
			{/*<UpperLeft requirements={this.state.requirements} 
        catalog={this.state.catalog} /> */}
			<UpperRight plan={this.state.plan} catalog={this.state.catalog}/>
			{/*<LowerLeft /> */}
			{/*<LowerRight catalog={this.state.catalog} /> */}
		</div>
	  );
	}

}
export default App;
