import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class UpperLeft extends Component {
	render (){
        var coreCourseName="";
        const courseList = this.props.requirements[this.props.plan].categories;
        let coreCourses = Object.entries(courseList).map(([key,value]) => {
            if(key == "Core"){
                coreCourseName = value.courses.map((element) => {
                    return (
                       <p>{element}</p>
                    );
                }); 
            }
        });
        var electiveCourseName="";
        let electiveCourses = Object.entries(courseList).map(([key,value]) => {
            if(key == "Electives"){
                electiveCourseName = value.courses.map((element) => {
                    return (
                       <p>{element}</p>
                    );
                }); 
            }
        });
        var cognateCourseName="";
        let cognateCourses = Object.entries(courseList).map(([key,value]) => {
            if(key == "Cognates"){
                cognateCourseName = value.courses.map((element) => {
                    return (
                       <p>{element}</p>
                    );
                }); 
            }
        });
	    return (
            
            <div class="UL">
                <h3>Requirements</h3>
                <Accordion atomic={true}>
                    <AccordionItem title="Core">
                        <div id="Core">{coreCourseName}</div>
                    </AccordionItem>
                    <AccordionItem title="Electives">
                        <div id="Electives">{electiveCourseName}</div>
                        
                    </AccordionItem>
                    <AccordionItem title="Cognates">
                        <div id="Cognates">{cognateCourseName}</div>
                        
                    </AccordionItem>
                </Accordion>
            </div>
        );
	}	
}

export default UpperLeft;
