import React from "react";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  
export default function About (){
    return <div>
	 	<Card className="mt-3">
	      <Card.Body>
	      <div>
	        <Card.Title>Students List
	        	<Link to="/ngssl/add-student">
					<Button style={{float:'right'}} className="mb-3 pull-right" variant="primary">Add Student</Button>
				</Link>
	        </Card.Title>
	        </div>
	         <Table striped bordered hover variant="dark">
			     <thead>
			        <tr>
			          <th>#</th>
			          <th>First Name</th>
			          <th>Last Name</th>
			          <th>Username</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>1</td>
			          <td>Mark</td>
			          <td>Otto</td>
			          <td>@mdo</td>
			        </tr>
			        <tr>
			          <td>2</td>
			          <td>Jacob</td>
			          <td>Thornton</td>
			          <td>@fat</td>
			        </tr>
			        <tr>
			          <td>3</td>
			          <td colSpan={2}>Larry the Bird</td>
			          <td>@twitter</td>
			        </tr>
			      </tbody>
			    </Table>
	        
	      </Card.Body>
	    </Card>
    </div>

}
  
 