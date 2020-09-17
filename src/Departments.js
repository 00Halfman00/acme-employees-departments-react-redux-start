import React from 'react';
import { connect } from 'react-redux';
import Department from './Department';
import { getDepartments } from './store';
import store from './store';

console.log('what',store.getState())

class Departments extends React.Component{
  componentDidMount() {
    this.props.getDepartments()
    const departments = store.getState()
    console.log('in departments ', departments)
  }
  
  render() {
    
    //console.log(departments, 'hi')
    
    return (  
      <h1>hello</h1>
      
      
    )
  }
};
//const mapState = ({departments}) => { return {deparments}
const mapState = (state) => { return {departments: state.deparments} }
const mapDispatch = (dispatch) => { return { getDepartments: ()=> dispatch(getDepartments()) }}
export default connect(mapState,mapDispatch)(Departments);
