import React, { useEffect } from "react"; 
import { Container } from "reactstrap";
import DivisionSearch from "./DivisionSearch";
import DivisionTable from "./DivisionTable";

function DivisionList() {
    useEffect(() => {
        document.title="DivisionList || NU Expense Management System"
    },[])
    return (
        <div>
            <Container>
                <Container className="text-center border" style={{ backgroundColor:"#96d9cf", marginTop:"10%", maginLeft:"20%", width:"60%", padding:"20px" }}>
                    <h1>課一覧</h1>
                </Container>
                    <DivisionSearch />
                    <DivisionTable />                   
            </Container>
        </div>
    )
}

export default DivisionList;