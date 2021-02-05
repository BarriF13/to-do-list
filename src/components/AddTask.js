import React, { Component } from 'react'

export class AddTask extends Component {
  state = {
    taskTitle: ""
  };

  onChangeTitle = (e) => {
    this.setState({ taskTitle: e.target.value })
  }
  onAddTask=()=>{
    const {addTask}=this.props;
    const {taskTitle}=this.state;
    addTask(taskTitle);

    this.setState({ taskTitle: ''} )
  }
  render() {
    const { onChangeTitle,  onAddTask } = this;
    const { taskTitle } = this.state;
    
    return (
      <div>
        <input type="text" value={taskTitle} onChange={onChangeTitle} placeholder="Enter a task tilte"/>
        <button disabled={!taskTitle} onClick={onAddTask}>Submit task</button>
      </div>
    )
  }
}

export default AddTask;
