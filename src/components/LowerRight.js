import React, {Component} from 'react';

class LowerRight extends Component {
    render(){
		var courseList = this.props.catalog.courses
        let courses = Object.entries(courseList).map(([key,value]) => {
			return(
				<tr>
				<td>{value.id}</td>
				<td>{value.name}</td>
				<td>{value.description}</td>
				<td>{value.credits}</td>
				</tr>
			);
            
        });

        return(
            <div id="LR">
                <table id="dataTable" class="display">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
						{courses}
                    </tbody>
                </table>
            </div>
        );
    }

	// // $(document).ready( function () {
	// // 	$('#dataTable').DataTable({
	// // 	  scrollY: 200,
	// // 	  paging: false
	// // 	});
	// // });
}

export default LowerRight;