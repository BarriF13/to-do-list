import React, { Component } from 'react'
import './../style.css';
import TaskList from '../components/taskList'

export class TaskContainer extends Component {
  state = {
    taskList: [
      { id: 't1', title: 'Task1' },
      { id: 't2', title: 'Task2' }
    ]
  }
  render() {
    const { taskList } = this.state;
    return (

      <div className='title'>
        <TaskList taskList={taskList} />
      </div>
    )
  }
}

export default TaskContainer;
