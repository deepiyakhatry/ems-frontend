import React, {useEffect, useState} from "react";
import { Button, Container, Table } from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";

function DivisionTable() {
    const [division, setDivision] = useState({})
    useEffect(() => {
        document.title="DivisionTable || NU Expense Management System"
    },[])
    const getDivisionListfromServer = () => {
        axios.get(`${base_url}/api/department/search`).then(
            (response)=> {
                console.log(response);
                setDivision(response.data);
            }, 
            (error) =>{
                console.log(error);
            }
        )
    }
    useEffect(() => {getDivisionListfromServer();
    },[])
    
    const data = [
        {"項目番号":1, "課名": "ネットワーク支援課", "アクション":<Button outline>編集</Button>},
        {"項目番号":2, "課名": "財務課", "アクション":<Button outline>編集</Button>},
        {"項目番号":3, "課名": "IT課", "アクション":<Button outline>編集</Button>}
    ]
    return (
        <Container className="text-center border" style={{backgroundColor: "#efefef",  marginLeft:"20%", width: "60%", padding: "20px"}}>            
            <Table bordered hover>
                <thead style={{backgroundColor:"#96d9cf"}} >
                    <tr>
                        <th>項目番号</th>
                        <th>課名</th>
                        <th>アクション</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, item) =>{
                            return (
                                <tr>
                                    <th>{value.項目番号}</th>
                                    <td>{value.課名}</td>
                                    <td>{value.アクション}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default DivisionTable;