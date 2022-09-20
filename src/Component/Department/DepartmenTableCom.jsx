import React from "react";
import { Table } from "reactstrap";
import DepartTable from "./DepartTable";

const Departments = ({departments}) => {
    
    return (
            <Table>
                <thead style={{backgroundColor:"#96d9cf"}}>
                    <tr>
                        <th>項目番号</th>
                        <th>部署名</th>
                        <th>アクション</th>
                    </tr>
                </thead>
                <tbody> 
                    {departments.map(department => <DepartTable key={departments.department_id} department={department} />) }                    
                </tbody> 
            </Table>
    )
}

export default Departments;