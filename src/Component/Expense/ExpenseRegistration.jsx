import React, { useState } from 'react';
import './ExpenseRegistration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_url from '../../api/bootapi';

const ExpenseRegistration = () => {
  let navigate = useNavigate();

  const [Expense, setExpense] = useState({
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
  } = Expense;

  const onInputChange = (e) => {
    setExpense({ ...Expense, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      await axios.post(`${base_url}/api/expense/register`, Expense);
      alert('Registered Successfully!');
    } catch {
      alert('Error while Registering!');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='register mt-5 m-auto'>
          <h3 className='mb-4'>Expense Register</h3>
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
                        Select dept_name
                      </option>
                      <option value='1'>One</option>
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
                        Select Division
                      </option>
                      <option value='1'>First</option>
                      <option value='2'>Second</option>
                      <option value='3'>Third</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>勘定科目t</td>
                  <td>
                    <select
                      required
                      className='form-control'
                      onChange={(e) => onInputChange(e)}
                      name='account'
                      value={account}
                      aria-label='Default select example'
                    >
                      <option selected value='primary'>
                        Select Account
                      </option>
                      <option value='primary'>Primary</option>
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
                      <button type='submit' className='btn btn-primary'>
                        登録
                      </button>
                    </td>

                    <td>
                      <Link to='/' className='btn btn-danger'>
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

export default ExpenseRegistration;
