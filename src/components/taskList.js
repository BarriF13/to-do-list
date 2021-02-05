import React from 'react';
import TaskItem from '../components/TaskItem';


const TaskList = ({ taskList }) => {
  return (
    <div>
      <ul>
        {
          taskList.map(task => (
            <TaskItem key={task.id} task={task}/>
          ))
        }
      </ul>
    </div>
  )
}

export default TaskList;
