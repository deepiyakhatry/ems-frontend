import React, { useState } from 'react';
import './ExpenseList.css';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';

const ExpenseList = () => {
  const [expenseRegister, setExpenseRegister] = useState([]);
  useEffect(() => {
    loadExpenseRegister();
  }, []);

  const loadExpenseRegister = async () => {
    const result = await axios.get(`${base_url}/api/expense/search`);
    setExpenseRegister(result.data);
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/expense-register/${id}`);
  //   loadExpenseRegister();
  // };

  let navigate = useNavigate();
  const [expenseList, setExpenseList] = useState({
    employee_no: '',
    full_name: '',
    application_date_from: '',
    application_date_to: '',
    approval_month_from: '',
    approval_month_to: '',
    payment_date_from: '',
    payment_date_to: '',
    approval_status: 'Approved',
  });
  const {
    employee_no,
    full_name,
    application_date_from,
    application_date_to,
    approval_month_from,
    approval_month_to,
    payment_date_from,
    payment_date_to,
    approval_status,
  } = expenseList;

  const onInputChange = (e) => {
    setExpenseList({ ...expenseList, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    await axios.post('http://localhost:8080/expense-list', expenseList);
    navigate('/expense-list');
    console.log(expenseList);
  };

  return (
    <Container>
      <Form
        className='shadow-lg p-3 mt-4 rounded'
        onSubmit={(e) => onSubmit(e)}
      >
        <Row>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Employee Number</Form.Label>
              <Form.Control
                required
                type='text'
                onChange={(e) => onInputChange(e)}
                value={employee_no}
                name='employee_no'
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type='text'
                onChange={(e) => onInputChange(e)}
                name='full_name'
                value={full_name}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Application Date From</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='application_date_from'
                value={application_date_from}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Application Date To</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='application_date_to'
                value={application_date_to}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Month From</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='approval_month_from'
                value={approval_month_from}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Month To</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='approval_month_to'
                value={approval_month_to}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Date From</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='payment_date_from'
                value={payment_date_from}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Date To</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='payment_date_to'
                value={payment_date_to}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Status</Form.Label>
              <Form.Select
                required
                onChange={(e) => onInputChange(e)}
                name='approval_status'
                value={approval_status}
              >
                <option value='Approved'>Approved</option>
                <option value='Not Approved'>Not Approved</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className='ms-auto'>
          <Col className='d-flex justify-content-end gap-2'>
            <Button variant='success' type='submit'>
              Search
            </Button>
            <Link to='/expense-list-data' className='btn btn-primary'>
              Show Data
            </Link>
          </Col>
        </Row>
      </Form>
      <Table striped hover className=' mt-5 shadow-lg rounded '>
        <thead className='border-bottom border-dark'>
          <tr>
            <th>S.N</th>
            <th>dept name</th>
            <th>division</th>
            <th>account</th>
            <th>summary</th>
            <th>payment status</th>
            <th>arrival station</th>
            <th>getting off station</th>
            <th>amount</th>
            <th>note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseRegister.map((expense, index) => {
            return (
              <tr key={index}>
                <th scope='row' key={index}>
                  {index + 1}
                </th>
                <td>{expense.dept_name}</td>
                <td>{expense.division}</td>
                <td>{expense.account}</td>
                <td>{expense.summary}</td>
                <td>{expense.payment_status}</td>
                <td>{expense.arrival_station}</td>
                <td>{expense.getting_off_station}</td>
                <td>{expense.amount}</td>
                <td>{expense.note}</td>
                <td className='d-flex'>
                  <Link
                    to={`/edit-expense-register/${expense.id}`}
                    className='btn btn-outline-primary mx-2'
                  >
                    Edit
                  </Link>
                  <button className='btn btn-outline-danger mx-2'>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ExpenseList;
