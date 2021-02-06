import React from 'react';
import '../style.css';
import { FILTERS } from '../constants';


const Filters = ({ currentFilter, changeFilter }) => {

  // const onChangeFilter = ({})=>{

  // }
  return (
    <div className='filters'>
      <button
        style={{ backgroundColor: currentFilter === FILTERS.ALL_TASKS ? 'grey' : '' }}
        onClick={() => changeFilter(FILTERS.ALL_TASKS)}>ALL</button>
      <button
        style={{ backgroundColor: currentFilter === FILTERS.COMPLETED ? 'grey' : '' }}
        onClick={() => changeFilter(FILTERS.COMPLETED)}>Completed</button>
      <button
        style={{ backgroundColor: currentFilter === FILTERS.UNCOMPLETED ? 'grey' : '' }}
        onClick={() => changeFilter(FILTERS.UNCOMPLETED)}>Uncompleted</button>
    </div>
  )
}

export default Filters;
