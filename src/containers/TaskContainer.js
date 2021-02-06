import React, { Component } from 'react'
import './../style.css';
import TaskList from '../components/taskList';
import AddTask from '../components/AddTask';

export class TaskContainer extends Component {
  state = {
    taskList: [
      { id: 't1', title: 'Task1', isCompleted: true },
      { id: 't2', title: 'Task2', isCompleted: false }
    ]
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

  render() {
    const { taskList } = this.state;
    const { addTask, onCheck } = this;
    return (

      <div className='title'>
        <AddTask addTask={addTask} />
        <TaskList taskList={taskList} onCheck={onCheck} />

      </div>
    )
  }
}

export default TaskContainer;
