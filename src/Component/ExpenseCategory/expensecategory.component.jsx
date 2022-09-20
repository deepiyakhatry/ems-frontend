import React from 'react';
import {Button} from 'reactstrap';
import { FaEdit, FaEye } from "react-icons/fa";
const ExpenseCategory = ({expensecategory:{expense_cat_id, expense_category_name}}) => {
    return(
        <tr key={expense_cat_id}>
           <td className='tddesign'>{expense_cat_id}</td>
           <td>{expense_category_name}</td>
           <td className='tddesign'>
               <Button type="submit" style={{background:'#A52A2A', border: 'none', width:'90%'}}><FaEdit /></Button>
           </td>
        </tr>
    )
}

export default ExpenseCategory;