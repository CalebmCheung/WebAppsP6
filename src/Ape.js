import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Term from './components/Term';
import UpperRight from './components/UpperRight';
import UpperLeft from './components/UpperLeft';
//import LowerRight from './components/LowerRight';
import LowerLeft from './components/LowerLeft';
import UserData from './components/UserData';
//import Banner from './components/Banner';

class Ape extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
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
		.then(data => this.setState({fullplan: data, plan: this.convertPlan(data), catalog: data.catalog, planList: data.plans, loading: false, requirements: data.requirements}));
	}
   
   async componentDidMount() {
		this.loadNewPlan();
   	}

	
   
   convertPlan(phpPlan) {
		var studentPlan = new Plan(phpPlan.plans[0].name,phpPlan.plans[0].catYear,phpPlan.plans[0].major,phpPlan.plans[0].student,phpPlan.plans[0].currYear,phpPlan.plans[0].currSem);
		for (var x in phpPlan.plans[0].courses) {
			studentPlan.addCourse(phpPlan.plans[0].courses[x].id, phpPlan.catalog.courses[phpPlan.plans[0].courses[x].id].name, phpPlan.plans[0].courses[x].term, phpPlan.plans[0].courses[x].year, phpPlan.catalog.courses[phpPlan.plans[0].courses[x].id].credits);
		}
		for (var key in phpPlan.plans[0].courses) {
			var course = phpPlan.plans[0].courses[key];
			if (course.term == "Fall"){
				var currYear = course.year;
				if (studentPlan.years[currYear] == undefined){
					studentPlan.years[currYear] = new Year(currYear);
				}
				studentPlan.years[currYear].fall[course.id] = course;
			}
			else if (course.term == "Spring"){
				var currYear = course.year - 1;
				if (studentPlan.years[currYear] == undefined){
					studentPlan.years[currYear] = new Year(currYear);
				}
				studentPlan.years[currYear].spring[course.id] = course;
			}
			else {
				var currYear = course.year - 1;
				if (studentPlan.years[currYear] == undefined){
					studentPlan.years[currYear] = new Year(currYear);
				}
				studentPlan.years[currYear].summer[course.id] = course;
			}
		}
		return studentPlan;
	}

	render(){
		if(this.state.loading){
			return (<h1>...Loading</h1>)
		}
	
		return (
			<div className="App" id="class_Data">
				<UserData plans={this.state.planList} catalog={this.state.catalog} totCredits={this.state.totCredits}/>
				<div id="Left">
					<UpperLeft requirements={this.state.requirements} catalog={this.state.catalog} /> 
					<LowerLeft />
				</div>
				<div id="Right">
					<UpperRight plan={this.state.plan} catalog={this.state.catalog} totCredits={this.state.totCredits}/>
					{/*<LowerRight catalog={this.state.catalog} /> */}
				</div>
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
export default Ape;
