import React, { useState } from 'react';
import './ExpenseRegistration.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';

const EditExpenseRegistration = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [ExpenseRegistration, setExpenseRegistration] = useState({
    dept_name: '',
    division: '',
    account: '',
    summary: '',
    payment_status: '',
    arrival_station: '',
    getting_off_station: '',
    amount: '',
    note: '',
  });

  const {
    dept_name,
    division,
    account,
    summary,
    payment_status,
    arrival_station,
    getting_off_station,
    amount,
    note,
  } = ExpenseRegistration;

  const onInputChange = (e) => {
    setExpenseRegistration({
      ...ExpenseRegistration,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    loadExpenseRegistration();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${base_url}/api/expense/search/${id}`,
        ExpenseRegistration
      );
      navigate('/expense-list');
      alert('Update Successful!');
    } catch {
      alert('Error while Updating...Try Again Later!');
    }
  };

  const loadExpenseRegistration = async () => {
    const result = await axios.get(`${base_url}/api/expense/search/${id}`);
    setExpenseRegistration(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='register mt-5 m-auto'>
          <h3 className='mb-4'>Edit Expense Data</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <table cellPadding='20px' className='first'>
              <tbody>
                <tr>
                  <td>部署</td>
                  <td>
                    <select
                      required
                      className='form-control'
                      onChange={(e) => onInputChange(e)}
                      name='dept_name'
                      value={dept_name}
                      aria-label='Default select example'
                    >
                      <option selected value='1'>
                        One
                      </option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>課</td>
                  <td>
                    <select
                      required
                      className='form-control'
                      onChange={(e) => onInputChange(e)}
                      name='division'
                      value={division}
                      aria-label='Default select example'
                    >
                      <option selected value='1'>
                        First
                      </option>
                      <option value='2'>Second</option>
                      <option value='3'>Third</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>勘定科目</td>
                  <td>
                    <select
                      required
                      className='form-control'
                      onChange={(e) => onInputChange(e)}
                      name='account'
                      value={account}
                      defaultValue='primary'
                      aria-label='Default select example'
                    >
                      <option selected value='primary'>
                        Primary
                      </option>
                      <option value='secondary'>Secondary</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>摘要欄</td>
                  <td>
                    <textarea
                      required
                      className='form-control'
                      onChange={(e) => onInputChange(e)}
                      name='summary'
                      value={summary}
                      id='form-control'
                      rows='2'
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>支払先</td>
                  <td>
                    <input
                      required
                      onChange={(e) => onInputChange(e)}
                      name='payment_status'
                      value={payment_status}
                      type='text'
                      className='form-control'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className='ds--flex'>
                    <div className='ds--flex-column'>
                      <label className='text-align--center'>乗車駅</label>
                      <input
                        required
                        onChange={(e) => onInputChange(e)}
                        name='arrival_station'
                        value={arrival_station}
                        type='text'
                        className='form-control mr--10'
                      />
                    </div>
                    <span className='span--tilde ds--flex justify-content--center'>
                      &#126;
                    </span>
                    <div className='ds--flex-column'>
                      <label className='text-align--center'>降車駅</label>
                      <input
                        required
                        onChange={(e) => onInputChange(e)}
                        name='getting_off_station'
                        value={getting_off_station}
                        type='text'
                        className='form-control'
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>金額</td>
                  <td>
                    <input
                      required
                      onChange={(e) => onInputChange(e)}
                      name='amount'
                      value={amount}
                      type='number'
                      className='form-control'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>備考</td>
                  <td>
                    <textarea
                      required
                      className='form-control'
                      id='form-control'
                      onChange={(e) => onInputChange(e)}
                      name='note'
                      value={note}
                      rows='3'
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <div className='btn-row'>
                    <td>
                      <button type='submit' className='btn btn-success'>
                        更新
                      </button>
                    </td>
                    <td>
                      <Link to='/expense-list' className='btn btn-danger'>
                        削除
                      </Link>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseRegistration;
