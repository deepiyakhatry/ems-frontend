import { useEffect } from "react"
import {FormGroup, Input ,  Button, Container, Row, Col, Label} from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { FaPrint, FaRedo, FaCross} from "react-icons/fa";
import axios from 'axios';
import base_url from '../../api/bootapi';
import { useState } from "react";
import Employees from "./employees.component";
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    
         useEffect(() => {
                document.title = "Employee List || Expense Management System";
         },[]);

         // Function to calling server
         const getEmployeeListFromServer = () => {
             axios.get(`${base_url}/api/employee/search`).then(
                  (response) => {
                    console.log(response.data);
                    setEmployees(response.data);
                  },
                  (error) => {
                   console.log(error);
                  }
             )
         }

         useEffect(()=> {
                   getEmployeeListFromServer();
         }, [])

         const [employees, setEmployees] = useState([]);
         return(
                <div className="employeelistmaindiv">
                     <Container>
                       <Form className="employeelistform">
                          <Row>
                             <Col md ="12">
                                 <FormGroup>
                                     <Label>氏名</Label>
                                     <Input type="text" id="fullname" className="listinputdesign" />
                                 </FormGroup>
                             </Col>
                          </Row>
                          <Row>
                             <Col md="6">
                                 <FormGroup>
                                     <Label>所属部署</Label>
                                     <Form.Select aria-label="Default select example" className="listinputdesign">
                                        <option value="1">System Department</option>
                                        <option value="2">Finance Department</option>
                                        <option value="3">Development Department</option>
                                     </Form.Select>
                                 </FormGroup>
                             </Col>
                             <Col md="6">
                                 <FormGroup>
                                     <Label>所属課</Label>
                                     <Form.Select aria-label="Default select example"  className="listinputdesign">
                                        <option value="1">System Development</option>
                                        <option value="2">System Support</option>
                                        <option value="3">Custom Support</option>
                                     </Form.Select>
                                 </FormGroup>
                             </Col>
                          </Row>
                          <Row>
                             <Col md ="2">
                                <Row>
                                   <Col md="6">
                                       <Button type="submit" className="searchbtn">検索</Button>
                                   </Col>
                                   <Col md="6">
                                       <Button type="submit" className="clearbtn">クリア</Button>
                                   </Col>
                                </Row>
                             </Col>
                             <Col md="7">
                             </Col>
                          </Row>
                          </Form>
                          <Row>
                             <Col md="9"></Col>
                             <Col md="1">
                                <Button className="commonbtn">
                                    <FaRedo />
                                </Button>
                             </Col>
                             <Col md="1">
                                <Button className="commonbtn">
                                    <FaPrint />
                                </Button>
                             </Col>
                             <Col md="1">
                             <Link to = "/empreg">
                                <Button className="commonbtn">
                                    <FaCross />
                                </Button>
                             </Link>
                             </Col>
                          </Row>
                          <Row className="tablerow">
                             <Col md="12">
                                 <Employees employees={employees} />
                             </Col>
                          </Row>
                     </Container>
                </div>
)}
export default EmployeeList;