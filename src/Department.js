import React from 'react';
import Employees from './Employees';


const Department = ({ department, employees, destroyEmployee, removeFromDepartment })=> (
      <li>
        <span className='department-title'>
          { department ? department.name : 'No Department' } 
        </span>
        <Employees />
      </li>
    );


export default Department;
