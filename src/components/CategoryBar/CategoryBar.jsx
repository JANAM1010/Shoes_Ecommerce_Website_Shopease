import './CategoryBar.css'
const categories = [
  { id: 'all', label: 'All' },
  { id: 'mens', label: "Men's Shoes 👟" },
  { id: 'womens', label: "Women's Shoes 👠" },
  { id: 'kids', label: "Kids' Shoes 👶" },
]
const subCategories = [
  { id: 'all', label: '✨ All' },
  { id: 'casual', label: '👟 Casual' },
  { id: 'formal', label: '👔 Formal' },
  { id: 'sports', label: '⚽ Sports' },
]
function CategoryBar({
  activeCategory, onCategoryChange,
  activeType, onTypeChange
}) 
{
  return (
    <div>
      {/* Main Category Bar */}
      <div className="category-bar">
        {categories.map(cat => (
          <button key={cat.id} className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`} 
          onClick={() => onCategoryChange(cat.id)}>
            {cat.label}
          </button>))}
      </div>
      {/* Sub Category Bar */}
      <div className="sub-category-bar">
        {subCategories.map(type => (
          <button  key={type.id}  className={`sub-category-btn ${activeType === type.id ? 'active' : ''}`}
            onClick={() => onTypeChange(type.id)}>
            {type.label}
          </button>))}
      </div>
    </div>
  )
}

export default CategoryBar