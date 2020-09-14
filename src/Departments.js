import React from 'react';
import Department from './Department';
const Departments = ({ departments, employees, destroyEmployee, removeFromDepartment })=> (
    <ul className='departments'>
      <Department />
    </ul>
);


export default Departments;
