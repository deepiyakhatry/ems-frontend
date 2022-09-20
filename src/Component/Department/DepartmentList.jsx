import React, {useEffect} from "react";
import { Container } from "reactstrap";
import DepartmentSearch from "./DepartmentSearch";
import DepartmentTable from "./DepartmentTable";

function DepartmentList() {
    useEffect(() => {
        document.title="DepartmentList || NU Expense Management System"
    },[])
    return (
        <div>
            <Container>
                <Container className="text-center border" style={{backgroundColor: "#96d9cf", marginTop: "10%", marginLeft:"20%", width: "60%", padding: "20px"}}>
                    <h1>部署一覧</h1>
                </Container>
                    <DepartmentSearch />
                    <DepartmentTable />                       
            </Container>            
        </div>
    )
}

export default DepartmentList;