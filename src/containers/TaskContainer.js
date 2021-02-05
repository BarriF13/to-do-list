import React, { Component } from 'react'
import './../style.css';
import TaskList from '../components/taskList';
import AddTask from '../components/AddTask';

export class TaskContainer extends Component {
  state = {
    taskList: [
      { id: 't1', title: 'Task1' },
      { id: 't2', title: 'Task2' }
    ]
  }
  addTask = (title) => {
    const newTaskList = [...this.state.taskList]//getting new array
    const newTask = {
      title,
      id: `${Date.now()}`,// get a unique string id
    };

    newTaskList.push(newTask);

    this.setState({ taskList: newTaskList })
  }
  render() {
    const { taskList } = this.state;
    const { addTask } = this;
    return (

      <div className='title'>
        <AddTask addTask={addTask}/>
        <TaskList taskList={taskList} />

      </div>
    )
  }
}

export default TaskContainer;
