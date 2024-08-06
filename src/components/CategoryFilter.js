import React from 'react'

function CategoryFilter({ categories, selected, setSelected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((item, index) => (
        <button
          className={selected === item ? 'selected' : ''}
          key={index}
          onClick={() => setSelected(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
