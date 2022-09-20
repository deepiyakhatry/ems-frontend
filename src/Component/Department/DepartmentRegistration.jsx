import axios from "axios";
import React, { useEffect, useState} from "react";
import { Fragment } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import base_url from "../../api/bootapi";

function DepartmentRegistration() {
    const [department, setDepartment] = useState({});
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        document.title="DepartmentRegistration || NU Expense Management System"
    },[])
    const handleForm = (e) =>{
        console.log(department, checked); 
        postDatatoServer(department,checked);
        e.preventDefault();
    }
    
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/api/department/register`,data).then(
            (response)=>{
                console.log(response);
            },
            (error) =>{
                console.log(error)
            }
            )
    }
    return (
        <Fragment>
            <Form onSubmit={handleForm}>
                <Container className="border" style={{backgroundColor: "#efefef", marginTop: "10%", marginLeft:"20%", width: "60%", padding: "20px"}}>
                    <Container className="text-center" >
                        <h1>部署の登録</h1>
                    </Container>                      
                    <Container>
                        <Row className="my-3">
                            <Col md="2">
                                <FormGroup>
                                    <Label>部署</Label>
                                </FormGroup>
                            </Col>
                            <Col md="10">
                                <FormGroup>
                                    <Input type="text" id="department_name" name="department_name" onChange={(e) => {setDepartment({...department,department_name:e.target.value})}} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                <FormGroup>
                                    <Label>
                                        アクセス
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md="10">
                                <FormGroup>
                                    <Input type="checkbox" name="auth_user_edit" id="auth_user_edit" onChange={(e) => {setChecked({...checked, auth_user_edit:e.target.checked})}} />{" "}
                                    ユーザー編集権限
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" />
                            <Col md="10">
                                <FormGroup>
                                    <Input type="checkbox" name="auth_expense_category" id="auth_expense_category" />{" "}
                                    勘定科目編集権限
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md="2" />
                            <Col md="10">
                                <FormGroup>
                                    <Input type="checkbox" name="auth_payment_edit" id="auth_payment_edit" />{" "}
                                    支払編集権限
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md="3" />
                            <Col md="3" >
                                <FormGroup>
                                    <Button onClick={()=>{}} color="primary" >更新</Button>
                                </FormGroup>
                            </Col>                            
                            <Col md="3">
                                <FormGroup>
                                    <Button type="submit" color="success" >登録</Button>
                                </FormGroup>                      
                            </Col>
                            <Col md="3">
                                <FormGroup>
                                    <Button type="submit" color="danger" >削除</Button>
                                </FormGroup>
                            </Col>
                        </Row>                   
                    </Container>                        
                </Container>                
            </Form>
        </Fragment>
    )
}

export default DepartmentRegistration;