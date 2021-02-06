import React from 'react';
import TaskItem from '../components/TaskItem';


const TaskList = ({ taskList , onCheck}) => {
  return (
    <div>
      <ul>
        {
          taskList.map(task => (
            <TaskItem onCheck={onCheck} key={task.id} task={task}/>
          ))
        }
      </ul>
    </div>
  )
}

export default TaskList;
