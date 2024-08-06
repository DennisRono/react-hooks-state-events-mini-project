import React from 'react'
import Task from './Task'

function TaskList({ tasks, removeItem }) {
  return (
    <div className="tasks">
      {tasks.map((item, index) => (
        <Task task={item} key={index} removeItem={removeItem} />
      ))}
    </div>
  )
}

export default TaskList
