import React, { useState } from 'react'

function NewTaskForm({ categories, handleNewProduct }) {
  const [formData, setFormData] = useState({
    text: '',
    category: '',
  })
  return (
    <form
      className="new-task-form"
      onSubmit={(e) => handleNewProduct(e, formData)}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {categories
            .filter((cat) => cat !== 'All')
            .map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  )
}

export default NewTaskForm
