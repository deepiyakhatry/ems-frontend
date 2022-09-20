import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import base_url from '../../api/bootapi';

const ExpenseListData = () => {
  const [ExpenseList, setExpenseList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadExpenseList();
  }, []);

  const loadExpenseList = async () => {
    const result = await axios.get(`${base_url}/api/expense/search`);
    setExpenseList(result.data);
  };

  const deleteExpenseList = async (id) => {
    await axios.delete(`${base_url}/api/expense/search/${id}`);
    loadExpenseList();
  };

  return (
    <div className='container'>
      <h1 className='my-2 text-center'>Expense List Data</h1>
      <Table striped hover className='mt-5 mx-2 shadow-lg rounded text-center'>
        <thead className='border-bottom border-dark'>
          <tr>
            <th>S.N</th>
            <th>社員番号</th>
            <th>氏名</th>
            <th>申請日 From</th>
            <th>申請日 To</th>
            <th>決裁月 From</th>
            <th>決裁月 To</th>
            <th>支払日 From</th>
            <th>支払日 To</th>
            <th>決裁状態</th>
            <th>アクション</th>
          </tr>
        </thead>
        <tbody>
          {ExpenseList.map((ExpenseList, index) => {
            return (
              <tr key={index}>
                <th scope='row' key={index}>
                  {index + 1}
                </th>
                <td>{ExpenseList.employee_no}</td>
                <td>{ExpenseList.full_name}</td>
                <td>{ExpenseList.application_date_from}</td>
                <td>{ExpenseList.application_date_to}</td>
                <td>{ExpenseList.approval_month_from}</td>
                <td>{ExpenseList.approval_month_to}</td>
                <td>{ExpenseList.payment_date_from}</td>
                <td>{ExpenseList.payment_date_to}</td>
                <td>{ExpenseList.approval_status}</td>
                <td className='d-flex'>
                  <Link
                    className='btn btn-outline-primary mx-2'
                    to={`/edit-expense-list/${ExpenseList.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-outline-danger mx-2'
                    onClick={() => deleteExpenseList(ExpenseList.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseListData;

{
  /* <tr>
                  <th scope='row' key={index}>
                    {index + 1}
                  </th>
                  
                </tr> */
}
