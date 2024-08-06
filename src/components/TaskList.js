import React from 'react'
import Task from './Task'

function TaskList({ tasks, removeItem }) {
  return (
    <div className="tasks">
      {tasks.map((item, index) => (
        <Task key={index} task={item} removeItem={removeItem} />
      ))}
    </div>
  )
}

export default TaskList
