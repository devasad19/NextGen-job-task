import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
  
export default function CreateStudent (){
      const navigate = useNavigate();

      const [studentName, setStudentName] = useState("")
      const [roll, setRoll] = useState("")
      const [studentClass, setStudentClass] = useState("")
      const [section, setSection] = useState("")
      const [adress, setAddress] = useState("")
      const [phone, setPhone] = useState("")
      const [email, setEmail] = useState("")
      const [validationError,setValidationError] = useState({})

       

      const createStudent = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('studentName', studentName)
        formData.append('roll', roll)
        formData.append('studentClass', studentClass)
        formData.append('section', section)
        formData.append('adress', adress)
        formData.append('phone', phone)
        formData.append('email', email)

        await axios.post(`http://127.0.0.1:8000/api/student`, formData).then(({data})=>{
          Swal.fire({
            icon:"success",
            text:data.message
          })
          navigate("/ngssl")
        }).catch(({response})=>{
          if(response.status===422){
            setValidationError(response.data.errors)
          }else{
            Swal.fire({
              text:response.data.message,
              icon:"error"
            })
          }
        })
      }


    return (
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-8">
                <div className="card mt-5">
                  <div className="card-body">
                    <h4 className="card-title">Create Product</h4>
                    <hr />
                    <div className="form-wrapper">
                      {
                        Object.keys(validationError).length > 0 && (
                          <div className="row">
                            <div className="col-12">
                              <div className="alert alert-danger">
                                <ul className="mb-0">
                                  {
                                    Object.entries(validationError).map(([key, value])=>(
                                      <li key={key}>{value}</li>   
                                    ))
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      <Form onSubmit={createStudent}>
                         
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Student Name
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter name" value={studentName} onChange={(event)=>{
                                            setStudentName(event.target.value)
                                          }}/>
                          </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Roll
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter student roll" value={roll} onChange={(event)=>{ setRoll(event.target.value)
                                          }}/>
                          </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Class
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter name" value={studentClass} onChange={(event)=>{ setStudentClass(event.target.value) }}/>
                          </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Section
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter section" value={section} onChange={(event)=>{ setSection(event.target.value) }}/>
                          </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Address
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter address" value={adress} onChange={(event)=>{ setAddress(event.target.value) }}/>
                          </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Mobile No
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter name" value={phone} onChange={(event)=>{ setPhone(event.target.value) }}/>
                          </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Email
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter name" value={email} onChange={(event)=>{ setEmail(event.target.value) }}/>
                          </Col>
                        </Form.Group>
                    
                        <Button type="submit" style={{float:'right'}} className="mb-3 pull-right" variant="primary">Create Student</Button>
                        </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}
  
 