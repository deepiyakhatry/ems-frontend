import React from "react";
import { Button } from "reactstrap";

const DepartTable = ({department:{department_id, department_name}}) => {
    return (
        <tr key ={department_id}>
            <td>{department_id}</td>
            <td>{department_name}</td>
            <td>
                <Button type="submit" outline>編集</Button>
            </td>
        </tr> 
    )
}

export default DepartTable;