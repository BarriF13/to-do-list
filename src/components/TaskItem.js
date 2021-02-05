import React from 'react'

const TaskItem = ({task}) => {
  return (
    <li key={task.id}>
    {task.title}
  </li>
  )
}

export default TaskItem;
