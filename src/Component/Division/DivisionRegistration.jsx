import axios from "axios";
import React, { useEffect, useState} from "react";
import { Fragment } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import base_url from "../../api/bootapi";

function DivisionRegistration() {
    const [division, setDivision] = useState({});
    useEffect(() => {
        document.title="DivisionRegistration || NU Expense Management System"
    },[])
    const handleForm = (e) => {
        console.log(division);
        postToServer(division)
        e.preventDefault();
    }    
    const postToServer = (d) => {
        axios.post(`${base_url}/api/division/register`,d).then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <Fragment>
            <Form onSubmit={handleForm}>
                <Container className="border" style={{backgroundColor: "#efefef", marginTop: "10%", marginLeft:"20%", width: "60%", padding: "20px"}}>
                    <Container className="text-center">
                        <h1>課の登録</h1>
                    </Container>                        
                    <Container >
                        <Row className="my-3">
                            <Col md="2">
                                <FormGroup>
                                    <Label>課名</Label>
                                </FormGroup>
                            </Col>
                            <Col md="10">
                                <FormGroup>
                                    <Input type="text" id="division_name" name="division_name" onChange={(e)=>{setDivision({...division,division_name:e.target.value})}} />
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
                                    <Input type="checkbox" name="auth_user_edit" id="auth_user_edit" />{" "}
                                    ユーザー編集権限
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" />
                            <Col md="10">
                                <FormGroup>
                                    <Input type="checkbox" name="aut_expense_category" id="auth_expense_category" />{" "}
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
                                    <Button type="" color="primary" >更新</Button>
                                </FormGroup>
                            </Col>                            
                            <Col md="3">
                                <FormGroup>
                                    <Button type="submit" color="success" >登録</Button>
                                </FormGroup>                      
                            </Col>
                            <Col md="3">
                                <FormGroup>
                                    <Button type="" color="danger" >削除</Button>
                                </FormGroup>
                            </Col>
                        </Row>                   
                    </Container>
                </Container>                
            </Form>
        </Fragment>
    )
}

export default DivisionRegistration;


