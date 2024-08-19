import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const initialState = {
  text: '',
  category: '',
}

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [form, setForm] = useState(initialState)

  const renderCategories = categories.map((c) => {
    return <option key={c} value={c} children={c} />
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit({
      id: uuid(),
      ...form,
    })
    setForm(initialState)
  }

  return (
    <form className="new-task-form" autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={form.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  )
}

export default NewTaskForm
