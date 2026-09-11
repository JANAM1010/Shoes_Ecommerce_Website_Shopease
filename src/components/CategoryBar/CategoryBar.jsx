import './CategoryBar.css'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'mens', label: "Men's Shoes 👟" },
  { id: 'womens', label: "Women's Shoes 👠" },
]

function CategoryBar({
  activeCategory,
  onCategoryChange
}) {
  return (
    <div className="category-bar">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`category-btn ${
            activeCategory === cat.id ? 'active' : ''
          }`}
          onClick={() => onCategoryChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar