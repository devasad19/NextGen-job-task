import React from "react";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
  
export default function CreateStudent (){
    return <div>
	 	<Card className="mt-3">
	      <Card.Body>
	        <Card.Title className="mb-3">Create New Student</Card.Title>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Student Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter name" />
            </Col>
          </Form.Group>
       
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Roll
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter student roll" />
            </Col>
          </Form.Group>
       
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Class
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter class" />
            </Col>
          </Form.Group>
       
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Section
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter section" />
            </Col>
          </Form.Group>
       
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Address
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter address" />
            </Col>
          </Form.Group>
       
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Mobile No
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="Enter mobile no" />
            </Col>
          </Form.Group>
       
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
          </Form.Group>
       
           <Button style={{float:'right'}} className="mb-3 pull-right" variant="primary">Create Student</Button>
       
	      </Card.Body>
	    </Card>
    </div>

}
  
 