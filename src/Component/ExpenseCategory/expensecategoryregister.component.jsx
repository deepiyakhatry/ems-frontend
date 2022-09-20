import { useEffect, useState} from 'react';
import axios from 'axios';
import {FormGroup, Input ,  Button, Container, Row, Col} from 'reactstrap';
import base_url from '../../api/bootapi';
import Form from 'react-bootstrap/Form';
const ExpenseCategoryRegister = () => {

            useEffect(() => {
                  document.title = "Expense Category || Expense Category Registration Form";
            }, []);

            const [category, setCategory] = useState({});

            const handleForm = (e) => {
                      e.preventDefault();
                      console.log(category);
                      postDatatoServer(category);
                      e.target.reset();
            }
          
            const postDatatoServer = (data) => {
               axios.post(`${base_url}/api/expensecat/register`, data).then(
                    (response) => {
                            console.log(response);
                    }, (error) => {
                            console.log(error);
                    }
            )}

            return(
                    <div>
                    <h1 className='heading-title'>Create Expense Category</h1>
                    <div className='expensecatregmaindiv'>
                    <Container>
                              <Form onSubmit={handleForm} className="catregisterform">
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>項目名</label><br />
                                                <Input type="text" id="" name="" className="inputdesign" onChange={(e) => { setCategory({ ...category,  expense_category_name: e.target.value })}} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className='martop'>
                                        <Col md="6">
                                        </Col>
                                        <Col md="6" className='designcol'>
                                            <Row>
                                             <Col md="4">
                                                <Button type="submit" className="registerbtn">登録</Button>
                                             </Col>
                                             <Col md="4"> 
                                                <Button type="submit" className="updatebtn">更新</Button>
                                             </Col>
                                             <Col md="4">
                                                <Button type="submit" className="deletebtn">削除</Button>
                                            </Col>
                                         </Row>
                                        </Col>
                                    </Row>
                              </Form>
                    </Container>   
                    </div>
                    </div>
)}
export default ExpenseCategoryRegister;
