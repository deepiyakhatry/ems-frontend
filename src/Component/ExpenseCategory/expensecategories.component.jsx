import React from 'react';
import ExpenseCategory from './expensecategory.component';
const ExpenseCategories = ({expensecategories}) => {
                       return(
                        <div>
                        <table>
                        <thead>
                          <tr>
                            <th>項番</th>
                            <th>項目名</th>
                            <th>アクション</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          expensecategories.length ? expensecategories.map(expensecategory => <ExpenseCategory key={expensecategories.expense_cat_id} expensecategory={expensecategory} />) : "No Data found"
                        }
                        </tbody>
                      </table>
                      </div>
                               
                       )
}

export default ExpenseCategories;