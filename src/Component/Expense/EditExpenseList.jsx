import React, { useState } from 'react';
import './ExpenseList.css';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';

const EditExpenseList = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [ExpenseList, setExpenseList] = useState({
    employee_no: '',
    full_name: '',
    application_date_from: '',
    application_date_to: '',
    approval_month_from: '',
    approval_month_to: '',
    payment_date_from: '',
    payment_date_to: '',
    approval_status: '',
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
  } = ExpenseList;

  const onInputChange = (e) => {
    setExpenseList({ ...ExpenseList, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadExpenseList();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${base_url}/api/expense-list/search/${id}`, ExpenseList);
      navigate('/expense-list');
      alert('Update Successful!');
    } catch {
      alert('Error Occured while Updating...Try Again Later!');
    }
  };

  const loadExpenseList = async (e) => {
    const ExpenseListResult = await axios.get(
      `${base_url}/api/expense-list/search/${id}`
    );
    setExpenseList(ExpenseListResult.data);
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
              <Form.Label>社員番号</Form.Label>
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
              <Form.Label>氏名</Form.Label>
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
              <Form.Label>申請日 From</Form.Label>
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
              <Form.Label>申請日 To</Form.Label>
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
              <Form.Label>決裁月 From</Form.Label>
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
              <Form.Label>決裁月 To</Form.Label>
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
              <Form.Label>支払日 From</Form.Label>
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
              <Form.Label>支払日 To</Form.Label>
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
              <Form.Label>決裁状態</Form.Label>
              <Form.Select
                required
                onChange={(e) => onInputChange(e)}
                name='approval_status'
                value={approval_status}
              >
                <option value='Approved'>承認済み</option>
                <option value='Not Approved'>保留中</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className='ms-auto'>
          <Col className='d-flex justify-content-end gap-2'>
            <Button variant='success' type='submit'>
              Update
            </Button>
            <Link to='/expense-list-data' className='btn btn-danger'>
              Cancel
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EditExpenseList;
