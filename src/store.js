import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

console.log(thunkMiddleware)

const GOT_DEPARTMENTS = 'GOT_DEPARTMENTS'

const gotDepartments = (departments) => ({
    type: GOT_DEPARTMENTS,
    departments
})

export const getDepartments = () => {
        return  async (dispatch) => {
            const  departments  = await axios.get('/api/departments')
            dispatch(gotDepartments(departments)).data
            
    }
}



//initial state
const initialState = { departments: [], employees: [] };

//reducer
const reducer = (state = initialState, action) => {
console.log(state)
    switch(action.type) {
        case GOT_DEPARTMENTS:
            //const departments = action.departments
            return {...state, departments: action.departments}
        default:
            return state;
    }
}




const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export default store;