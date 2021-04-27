import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class UpperLeft extends Component {
	render (){
        const courseList = this.props.requirements[0].categories;
        let courses = Object.entries(courseList).map(([key,value]) => {
            var courseName;
            value.courses.forEach(element => {
                courseName += "<p>" + element + "</p>";
            });
            return (
              <span>
                  {courseName}
              </span>
            );	
        });
	    return (
            
            <div class="UL">
                <h3>Requirements</h3>
                <Accordion atomic={true}>
                    <AccordionItem title="Core">
                        <p>{courses}</p>
                    </AccordionItem>
                    <AccordionItem title="Electives">
                        
                    </AccordionItem>
                    <AccordionItem title="Electives">
                        
                    </AccordionItem>
                </Accordion>
            </div>
        );
	}	
}

export default UpperLeft;
