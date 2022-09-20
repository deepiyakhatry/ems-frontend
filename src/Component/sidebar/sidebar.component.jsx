import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>NUAdmin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>DASHBOARD</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>Expenses</p>
          <li>
            <CategoryIcon className='icon' />
            <Link className='linkdesign' to='/expcatlist'>
              <span>Expense Category</span>
            </Link>
          </li>
          <li>
            <FormatListBulletedIcon className='icon' />
            <Link className='linkdesign' to='/expense-list'>
              <span>Expenses List</span>
            </Link>
          </li>
          <li>
            <FormatListBulletedIcon className='icon' />
            <Link className='linkdesign' to='/expense-register'>
              <span>Expense Register</span>
            </Link>
          </li>
          <p className='title'>Employees</p>
          <li>
            <ViewModuleIcon className='icon' />
            <span>Department</span>
          </li>
          <li>
            <ViewModuleIcon className='icon' />
            <span>Division</span>
          </li>
          <li>
            <FormatListBulletedIcon className='icon' />
            <Link className='linkdesign' to='/emplist'>
              <span>Employees List</span>
            </Link>
          </li>
          <p className='title'>Employees</p>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
