import React, { useEffect, useState } from 'react';
import {FormGroup, Input ,  Button, Container, Row, Col, Label} from 'reactstrap';
import Form from 'react-bootstrap/Form';
import base_url from '../../api/bootapi';
import axios from 'axios';

const EmployeeRegister = () => {

                   useEffect(() => {
                          document.title = "Register Employee || Expense management System"
                   }, []);

                   const [employee, setEmployee] = useState({});

                   const handleChange = (e) => {
                          e.preventDefault();
                          console.log(employee);
                          postDatatoServer(employee);
                          e.target.reset();
                   }
                   // creating function to postdata on server
                   const postDatatoServer = (data) => {
                      axios.post(`${base_url}/api/employee/register`, data).then(
                           (response) => {
                                   console.log(response);
                           }, (error) => {
                                   console.log(error);
                           }
                   )}
                   return(
                          <div>
                          <h1 className='heading-title'>Create Employee</h1>
                          <div className='employeeregmaindiv'>
                          <Container>
                               <Form onSubmit={handleChange} className="registerform">
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>社員番号</Label>
                                                      <Input type="text" id="staffname" onChange = {(e) => {setEmployee({...employee, staff_id: e.target.value})}} className="registerinputdesign" />
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>パスワード</Label>
                                                      <Input type="password" id="staffpassword" onChange = {(e) => {setEmployee({...employee, staff_pswd: e.target.value})}} className="registerinputdesign" />
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>氏名</Label>
                                                      <Input type="text" id="fullname" onChange = {(e) => {setEmployee({...employee, staff_name: e.target.value})}} className="registerinputdesign" />
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>フリガナ</Label>
                                                      <Input type="text" id="furigana" onChange = {(e) => {setEmployee({...employee, staff_kana: e.target.value})}} className="registerinputdesign" />
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>所属部署</Label>
                                                      <Form.Select aria-label="Default select example" onChange={(e) => {setEmployee({...employee, department_id: e.target.value})}} className="registerinputdesign">
                                                            <option value="1">System Department</option>
                                                            <option value="2">Finance Department</option>
                                                            <option value="3">Development Department</option>
                                                      </Form.Select>
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>所属課</Label>
                                                      <Form.Select aria-label="Default select example" onChange={(e) => {setEmployee({...employee, division_id: e.target.value})}} className="registerinputdesign">
                                                            <option value="1">System Development</option>
                                                            <option value="2">System Support</option>
                                                            <option value="3">Custom Support</option>
                                                      </Form.Select>
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                 <FormGroup>
                                                      <Label>メールアドレス</Label>
                                                      <Input type="email" id="email" onChange = {(e) => {setEmployee({...employee, staff_email: e.target.value})}} className="registerinputdesign" />
                                                 </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className='marregtop'>
                                            <Col md="2">
                                               <Button type="submit" className="registerbtn">登録</Button>
                                            </Col>
                                            <Col md="3"></Col>
                                            <Col md="2"> 
                                               <Button type="submit" className="updatebtn">更新</Button>
                                            </Col>
                                            <Col md="3"></Col>
                                            <Col md="2">
                                               <Button type="submit" className="deletebtn">削除</Button>
                                             </Col>
                                        </Row>
                                </Form>
                          </Container>
                          </div>
                          </div>
)}
export default EmployeeRegister;