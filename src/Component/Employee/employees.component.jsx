import React from 'react';
import Employee from './employee.component';
const Employees = ({employees}) => {
         return(
                <div>
                  <table>
                  <thead>
                    <tr>
                       <th>項番</th>
                       <th>社員番号</th>
                       <th>氏名</th>
                       <th>フリガナ</th>
                       <th>所属部署</th>
                       <th>所属課 </th>
                       <th>メールアドレス</th>
                       <th>アクション</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                       employees.length ? employees.map(employee => <Employee key={employee.staff_id} employee={employee} />) : "No data found"
                     }
                  </tbody>
                  </table>
                  </div>
               )
}
export default Employees;