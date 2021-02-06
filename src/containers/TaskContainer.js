import React, { Component } from 'react'
import './../style.css';
import TaskList from '../components/taskList';
import AddTask from '../components/AddTask';
import Filters from '../components/Filters';
import { FILTERS } from '../constants';

export class TaskContainer extends Component {
  state = {
    taskList: [
      { id: 't1', title: 'Task1', isCompleted: true },
      { id: 't2', title: 'Task2', isCompleted: false }
    ],
    currentFilter: FILTERS.ALL_TASKS
  };
  get currentList() {
    const { currentFilter, taskList } = this.state;
    switch (currentFilter) {
      case FILTERS.ALL_TASKS:
        return taskList;

      case FILTERS.COMPLETED:
        return taskList.filter(task => task.isCompleted);

      case FILTERS.UNCOMPLETED:
        return taskList.filter(task => !task.isCompleted);

        default:
          return taskList;
    }
  }

  addTask = (title) => {
    const newTaskList = [...this.state.taskList]//getting new array
    const newTask = {
      title,
      id: `${Date.now()}`,// get a unique string id
      isCompleted: false
    };

    newTaskList.push(newTask);

    this.setState({ taskList: newTaskList })
  }

  onCheck = (taskId) => {
    const newTaskList = this.state.taskList.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    this.setState(this.state.taskList = newTaskList)
  }
  changeFilter = (newFilter) => {
    return this.setState({ currentFilter: newFilter })
  }
  render() {
    //const { taskList, currentFilter} = this.state;
   const { currentFilter} = this.state;
   
    const { addTask, onCheck, changeFilter, currentList } = this;
    return (

      <div className='title'>
        <AddTask addTask={addTask} />
        <TaskList taskList={currentList} onCheck={onCheck} />
        <Filters currentFilter={currentFilter} changeFilter={changeFilter} />
      </div>
    )
  }
}

export default TaskContainer;
