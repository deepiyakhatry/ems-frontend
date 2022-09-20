import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { FaEdit, FaEye } from "react-icons/fa";
const Employee = ({employee:{staff_id, staff_name, staff_kana, department_id,division_id,staff_email}} ) => {
           return(
                  <tr key={staff_id}>
                     <td>{staff_id}</td>
                     <td>{staff_id}</td>
                     <td>{staff_name}</td>
                     <td>{staff_kana}</td>
                     <td>{department_id}</td>
                     <td>{division_id}</td>
                     <td>{staff_email}</td>
                     <td>
                     <Container>
                         <Row>
                            <Col md="6">
                                <Button type="submit" style={{background:'#097969', border: 'none', width:'100%'}}><FaEye /></Button>
                            </Col>
                            <Col md="6">
                                <Button type="submit" style={{background:'#A52A2A', border: 'none', width:'100%'}}><FaEdit /></Button>
                            </Col>
                         </Row>                                                         
                     </Container>
                     </td>
                  </tr>
           )
}
export default Employee;