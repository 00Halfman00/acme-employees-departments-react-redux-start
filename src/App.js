import React, { Component } from 'react';
import Departments from './Departments';
import Stats from './Stats';
import axios from 'axios';
import store from './store';

class App extends Component{
    constructor(){
      super();
      this.state = store.getState();
      
      this.destroyEmployee = this.destroyEmployee.bind(this);
      this.removeFromDepartment = this.removeFromDepartment.bind(this);
    }

    async destroyEmployee(employee){
      await axios.delete(`/api/employees/${employee.id}`);
      const employees = this.state.employees.filter(_employee => employee.id !== _employee.id);
      this.setState({ employees });
    }

    async removeFromDepartment(employee){
      employee = (await axios.put(`/api/employees/${employee.id}`, { departmentId: null})).data;
      const employees = this.state.employees.map(_employee => employee.id === _employee.id ? employee : _employee);
      this.setState({ employees });
    }

    async componentDidMount(){
      //this.props.getDepartments()
      const responses = await Promise.all([
        axios.get('/api/employees'),
        axios.get('/api/departments'),
      ]);

      this.setState({
        employees: responses[0].data,
        departments: responses[1].data
      });
    }
    render(){
      return (
        <div>
          <h1>Acme Employees And Departments</h1>
          <Stats/>
          <Departments/>
        </div>
      );
    }
  }

  export default App;