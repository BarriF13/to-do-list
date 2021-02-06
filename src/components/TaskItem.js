import React from 'react'

const TaskItem = ({ task, onCheck }) => {

  const onCheckBoxClick = () => {
    onCheck(task.id)
  }
  return (
    <div>

      <li key={task.id}>
        <input type="checkbox" checked={task.isCompleted} onClick={onCheckBoxClick}/>{task.title}
      </li>
    </div>
  )
}

export default TaskItem;
