import React from 'react';

const Employee = ({ employee, destroyEmployee, removeFromDepartment })=> (
    <li>
      
      <button onClick={ ()=> destroyEmployee(employee)}>x</button>
      {
        !!removeFromDepartment && (
          <button onClick={ ()=> removeFromDepartment(employee)}>Remove From Department</button>
        )
      }
    </li>
);


export default Employee;
