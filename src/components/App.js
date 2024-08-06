import React, { useEffect, useState } from 'react'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'
import { CATEGORIES, TASKS } from '../data'

console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
  const [selected, setSelected] = useState('')
  const [mytasks, setMyTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    setMyTasks(TASKS)
  }, [])

  useEffect(() => {
    if (selected !== '' && selected.toLowerCase() !== 'all') {
      setFilteredTasks(
        mytasks.filter(
          (item) => item.category.toLowerCase() === selected.toLowerCase()
        )
      )
    } else {
      setFilteredTasks(mytasks)
    }
  }, [mytasks, selected])

  const onTaskFormSubmit = (e, formData) => {
    e.preventDefault()
    setMyTasks([...mytasks, formData])
  }

  const removeItem = (item) => {
    setMyTasks(mytasks.filter((myitem) => myitem.text !== item.text))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selected={selected}
        setSelected={setSelected}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} removeItem={removeItem} />
    </div>
  )
}

export default App
