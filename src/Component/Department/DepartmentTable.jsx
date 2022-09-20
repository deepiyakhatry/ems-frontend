import axios from "axios";
import React, {useEffect, useState} from "react";
import { Container, Table } from "reactstrap";
import Departments from "./DepartmenTableCom";
import base_url from "../../api/bootapi";

function DepartmentTable() {
    useEffect(() => {
        document.title="DepartmentTable || NU Expense Management System"
    },[])
    const [departments, setDepartments] = useState([]);
    const getDepartmentListFromServer = () => {
        axios.get(`${base_url}/api/department/search`).then(
            (response) => {
                console.log(response.data)
                setDepartments(response.data)
            }, (error) => {
                console.log(error)
            }
        )
    }
    useEffect(() => {
        getDepartmentListFromServer();
    }, [])

    return (
        <Container className="text-center border" style={{backgroundColor: "#efefef", marginLeft:"20%", width: "60%", padding: "20px"}}>
            <Table bordered hover>
                <tbody>
                    <Departments departments={departments} />
                </tbody>
            </Table>
        </Container>
    )
}

export default DepartmentTable;