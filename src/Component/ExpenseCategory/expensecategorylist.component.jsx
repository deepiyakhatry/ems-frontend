import {useEffect, useState} from 'react';
import {Form, FormGroup, Input , Button, Container, Row, Col, Label} from 'reactstrap';
import {FaPrint, FaRedo, FaCross} from "react-icons/fa";
import axios from 'axios';
import base_url from '../../api/bootapi';
import ExpenseCategories from './expensecategories.component';
import { Link } from "react-router-dom";

    const ExpenseCategoryList = () => {
      useEffect(() => {
        document.title = "Expense Category List || Expense Management System";
    },[]);

   // Function to calling server
   const getExpenseCatListFromServer = () => {
         axios.get(`${base_url}/api/expensecat/search`).then(
               (response) => {
                    console.log(response.data);
                    setExpenseCategories(response.data);
               },
               (error) => {
                    console.log(error);
               }
         )}
                    
         useEffect(()=> {
                   getExpenseCatListFromServer();
         }, [])

         const [expensecategories, setExpenseCategories] = useState([]);
         return(
               <div className='expensecatlistmaindiv'>
                  <Container>
                  <Form className='expensecatlistform'>
                     <Row>
                     <Col md="12">
                     <FormGroup>
                       <Label>項目名</Label>
                       <Input type="search" id="" name="searchitem" placeholder="Search Category" className='listinputdesign' />
                     </FormGroup>
                     </Col>
                     </Row>   
                     <Row>
                     <Col md ="2">
                     <Row>
                     <Col md="6">
                       <Button type="submit" className="searchbtn">検索</Button>
                     </Col>
                     <Col md="6"> </Col>
                     </Row>
                     </Col>
                     <Col md="10"> </Col>
                     </Row>
                     </Form>
                     <Row>
                     <Col md="9"></Col>
                     <Col md="1">
                       <Button className="commonbtn">
                          <FaRedo />
                       </Button>
                     </Col>
                     <Col md="1">
                       <Button className="commonbtn">
                          <FaPrint />
                       </Button>
                     </Col>
                     <Col md="1">
                       <Link to = "/expcatreg">
                         <Button className="commonbtn">
                           <FaCross />
                         </Button>
                       </Link>
                     </Col>
                     </Row>
                     <Row className="tablerow">
                     <Col md="12">
                       <ExpenseCategories expensecategories={expensecategories} />
                     </Col>
                     </Row>
                     </Container>
               </div>
)}
export default ExpenseCategoryList;