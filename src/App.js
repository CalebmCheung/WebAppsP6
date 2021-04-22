import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Term from './components/Term';
import UpperRight from './components/UpperRight';
import UpperLeft from './components/UpperLeft';
//import LowerRight from './components/LowerRight';
import LowerLeft from './components/LowerLeft';
//import UserData from './components/UserData';
//import Banner from './components/Banner';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  planList: null,
		  catalog: null,
		  fullplan: null,
		  totCredits: 0
		};
	}

  	loadNewPlan(){
    	fetch('http://judah.cedarville.edu/~kretsch/TermProject/getAllNoSession.php')
		.then(response => response.json())
		.then(data => this.setState({fullplan: data}));
	}
   
   componentDidMount() {
		this.loadNewPlan();
	 	this.doSomething();
   }

   doSomething(){
	console.log(this.state.fullplan);
   }
   

 

 
 
	render(){

	  return (
		<div className="App" id="main">
			{/*<UserData plans={this.state.planList} catalog={this.state.catalog} totCredits={this.state.totCredits}/>*/}
			{/*<UpperLeft requirements={this.state.requirements} catalog={this.state.catalog} /> */}
			{/*<UpperRight plan={this.state.plan} catalog={this.state.catalog} totCredits={this.state.totCredits}/>*/}
			<LowerLeft />
			{/*<LowerRight catalog={this.state.catalog} /> */}
		</div>
	  );
	}

}

class Plan {
	constructor(name, catYear, major, student, currYr, currSem) {
		this.name = name;
		this.catYear = catYear;
		this.major = major;
		this.student = student;
		this.currYr = currYr;
		this.currSem = currSem;
		this.courses = {};
		this.years = {};
	}
	addCourse(code, name, semester, year, credits) {
		this.courses[code] = new Course(code, name, semester, year, credits);

	}
	convertPlan() {
	    for (var key in this.courses) {
	    	var course = this.courses[key];
	    	var currYear = course.year;
	    	if (this.years[currYear] == undefined){
				this.years[currYear] = new Year(currYear);
	    	}
	    	if (course.semester == "Fall"){
				this.years[currYear].fall[course.code] = course;
	    	}
	    	else if (course.semester == "Spring"){
				this.years[currYear].spring[course.code] = course;
	    	}
	    	else{
				this.years[currYear].summer[course.code] = course;
	    	}
	    }
	}
}

class Course {
	constructor(code, name, semester, year, credits) {
		this.code = code;
		this.name = name;
		this.semester = semester;
		this.year = year;
		this.credits = credits;
	}
}

class Year {
	constructor(year) {
		this.year = year;
		this.fall = {};
		this.spring = {};
		this.summer = {};
	}
}
export default App;
