import React from 'react';

const TaskList = ({ taskList }) => {
  return (
    <div>
      <ul>
        {
          taskList.map(task => (
            <li key={task.id}>
              {task.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TaskList;
