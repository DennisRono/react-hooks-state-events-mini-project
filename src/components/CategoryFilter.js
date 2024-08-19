const CategoryFilter = ({
  categories: [all, code, food, money, misc],
  filter,
  handleFilter,
}) => {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* {renderFilterButtons} */}
      <div>
        <button
          type="button"
          className={filter === all ? 'selected' : ''}
          value={all}
          onClick={handleFilter}
        >
          {all}
        </button>
        <button
          type="button"
          className={filter === code ? 'selected' : ''}
          value={code}
          onClick={handleFilter}
        >
          {code}
        </button>
        <button
          type="button"
          className={filter === food ? 'selected' : ''}
          value={food}
          onClick={handleFilter}
        >
          {food}
        </button>
        <button
          type="button"
          className={filter === money ? 'selected' : ''}
          value={money}
          onClick={handleFilter}
        >
          {money}
        </button>
        <button
          type="button"
          className={filter === misc ? 'selected' : ''}
          value={misc}
          onClick={handleFilter}
        >
          {misc}
        </button>
      </div>
    </div>
  )
}

export default CategoryFilter
