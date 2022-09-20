import React, {useEffect} from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";

function DivisionSearch() {
    useEffect(() => {
        document.title="DepartmentSearch || NU Expense Management System"
    },[])
    return (
        <Container className="border" style={{backgroundColor: "#efefef", marginLeft:"20%", width: "60%", padding: "20px"}}>
            <Row>
                <Col md="10">
                    <Label>課名</Label>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <Input />
                </Col>                
            </Row>
            <Row className="my-2">
                <Col md="10" />
                <Col>
                    <Button outline>作成</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default DivisionSearch;