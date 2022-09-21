import React from 'react';
import Sidebar from '../src/Component/sidebar/sidebar.component';
import ExpenseList from './Component/Expense/ExpenseList';
import Navbar from './Component/navbar/Navbar.component';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import ExpenseRegistration from './Component/Expense/ExpenseRegistration';
import EditExpenseRegistration from './Component/Expense/EditExpenseRegistration';
import ExpenseListData from './Component/Expense/ExpenseListData';
import EditExpenseList from './Component/Expense/EditExpenseList';

const App = () => {
  return (
    <BrowserRouter>
      <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar />

          <Routes>
            <Route path='/expense-list' element={<ExpenseList />} />
            <Route path='/expense-list-data' element={<ExpenseListData />} />
            <Route
              path='/edit-expense-list/:id'
              element={<EditExpenseList />}
            />
            <Route path='/expense-register' element={<ExpenseRegistration />} />
            <Route
              path='/edit-expense-register/:id'
              element={<EditExpenseRegistration />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
