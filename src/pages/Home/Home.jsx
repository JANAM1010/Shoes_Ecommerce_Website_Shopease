// import { useState, useMemo } from 'react'
// import ProductCard from '../../components/ProductCard/ProductCard'
// import Spinner from '../../components/Spinner/Spinner'
// import CategoryBar from '../../components/CategoryBar/CategoryBar'
// import useFetch from '../../hooks/useFetch'
// import { fetchProducts } from '../../services/productService'
// import './Home.css'

// function HeroBanner({ activeCategory, activeType }) {
//   const banners = {
//     all: {
//       title: "Step Into Style 👟",
//       subtitle: "Discover our premium collection of shoes for every occasion",
//       bg: "linear-gradient(135deg, #7171a1 0%, #374367 50%, #0f3460 100%)"
//     },
//     mens: {
//       title: "Men's Collection 👟",
//       subtitle: "Bold styles built for performance and everyday wear",
//       bg: "linear-gradient(135deg, #4597fc 0%, #1a1a2e 100%)"
//     },
//     womens: {
//       title: "Women's Collection 👠",
//       subtitle: "Elegant and comfortable shoes for every step",
//       bg: "linear-gradient(135deg, #f9ced5 0%, #c73652 100%)"
//     },
//     kids: {
//       title: "Kids' Collection 👶",
//       subtitle: "Fun, colorful and comfy shoes for little feet",
//       bg: "linear-gradient(135deg, #97ebf6 0%, #96f3d5 100%)"
//     }
//   }
//   const typeLabel = {
//     casual: '👟 Casual',
//     formal: '👔 Formal',
//     sports: '⚽ Sports',
//     all: ''
//   }
//   const banner = banners[activeCategory] || banners.all
//   return (
//     <div className="hero-banner" style={{ background: banner.bg }}>
//       <h1 className="hero-title">
//         {banner.title}
//         {activeType !== 'all' && (
//           <span className="hero-type-badge"> — {typeLabel[activeType]}</span>
//         )}
//       </h1>
//       <p className="hero-subtitle">{banner.subtitle}</p>
//     </div>
//   )
// }
// function Home() {
//   const { data: products, loading, error } = useFetch(fetchProducts)
//   const [activeCategory, setActiveCategory] = useState('all')
//   // const [activeType, setActiveType] = useState('all')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [sortOrder, setSortOrder] = useState('default')

//   // const filteredProducts = useMemo(() => {
//   //   if (!products) return []
//   //   let result = products
//   //   // if (activeCategory !== 'all') {
//   //   //   result = result.filter(p => p.section === activeCategory)
//   //   // }
//   //   if (activeType !== 'all') {
//   //     result = result.filter(p => p.type === activeType)
//   //   }
//   //   if (searchQuery.trim() !== '') {
//   //     result = result.filter(p =>
//   //       p.title.includes(searchQuery.toUpperCase())
//   //     )
//   //   }
//   //   if (sortOrder === 'low-to-high') {
//   //     result = [...result].sort((a, b) => a.price - b.price)
//   //   } else if (sortOrder === 'high-to-low') {
//   //     result = [...result].sort((a, b) => b.price - a.price)
//   //   }
//   //   return result
//   // }, [products, activeCategory, activeType, searchQuery, sortOrder])
//   // if (loading) return <Spinner />
//   // if (error) return (
//   //   <div className="error-message">
//   //     <p>{error}</p>
//   //   </div>
//   // )


//   const filteredProducts = useMemo(() => {
//   if (!products) return []

//   let result = products

//   if (activeCategory !== 'all') {
//     result = result.filter(p => p.section === activeCategory)
//   }

//   if (searchQuery.trim() !== '') {
//     result = result.filter(p =>
//       p.title.toUpperCase().includes(searchQuery.toUpperCase())
//     )
//   }

//   if (sortOrder === 'low-to-high') {
//     result = [...result].sort((a, b) => a.price - b.price)
//   } else if (sortOrder === 'high-to-low') {
//     result = [...result].sort((a, b) => b.price - a.price)
//   }

//   return result
// }, [products, activeCategory, searchQuery, sortOrder])


//   return (
//     <div>
//       <CategoryBar
//         activeCategory={activeCategory}
//         onCategoryChange={(category) => {  setActiveCategory(category)
//           setActiveType('all')
//           setSearchQuery('')
//           setSortOrder('default')
//         }}
//         activeType={activeType}
//         onTypeChange={(type) => {  setActiveType(type)
//           setSearchQuery('')
//         }}
//       />
//       <HeroBanner  activeCategory={activeCategory}  activeType={activeType}/>
//       <div className="filter-bar">
//         <input  type="text"  className="search-input"  placeholder="🔍 Search shoes..."  value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}/>
//         <select  className="sort-select"  value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}>
//           <option value="default">Sort by Price</option>
//           <option value="low-to-high">Price: Low to High ↑</option>
//           <option value="high-to-low">Price: High to Low ↓</option>
//         </select>
//       </div>

//       <div className="home">
//         <h2 className="home-title">
//           {activeCategory === 'all' && 'All Products'}
//           {activeCategory === 'mens' && "Men's Shoes 👟"}
//           {activeCategory === 'womens' && "Women's Shoes 👠"}
//           {activeCategory === 'kids' && "Kids' Shoes 👶"}
//           {filteredProducts.length > 0 && (
//             <span className="product-count">
//               ({filteredProducts.length} products)
//             </span>
//           )}
//         </h2>

//         {filteredProducts.length === 0 && (
//           <div className="no-results">
//             <p>😕 No products found!</p>
//             <button onClick={() => {  setSearchQuery('')
//               setActiveType('all')}}>
//               Clear Filters
//             </button>
//           </div>
//         )}

//         <div className="products-grid">
//           {filteredProducts.map(product => (<ProductCard key={product.id} product={product} />))}
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Home





import { useState, useMemo } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import Spinner from '../../components/Spinner/Spinner'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import useFetch from '../../hooks/useFetch'
import { fetchProducts } from '../../services/productService'
import './Home.css'

function HeroBanner({ activeCategory }) {
  const banners = {
    all: {
      title: "Step Into Style 👟",
      subtitle: "Discover our premium collection of shoes for every occasion",
      bg: "linear-gradient(135deg, #7171a1 0%, #374367 50%, #0f3460 100%)"
    },
    mens: {
      title: "Men's Collection 👟",
      subtitle: "Bold styles built for performance and everyday wear",
      bg: "linear-gradient(135deg, #4597fc 0%, #1a1a2e 100%)"
    },
    womens: {
      title: "Women's Collection 👠",
      subtitle: "Elegant and comfortable shoes for every step",
      bg: "linear-gradient(135deg, #f9ced5 0%, #c73652 100%)"
    }
  }

  const banner = banners[activeCategory] || banners.all

  return (
    <div className="hero-banner" style={{ background: banner.bg }}>
      <h1 className="hero-title">
        {banner.title}
      </h1>

      <p className="hero-subtitle">
        {banner.subtitle}
      </p>
    </div>
  )
}

function Home() {
  const { data: products, loading, error } = useFetch(fetchProducts)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('default')

  const filteredProducts = useMemo(() => {
    if (!products) return []
    let result = products

    // Men's / Women's filtering
    if (activeCategory !== 'all') {
      result = result.filter(
        p => p.section === activeCategory
      )
    }
    // Search
    if (searchQuery.trim() !== '') {
      result = result.filter(p =>
        p.title
          .toUpperCase()
          .includes(searchQuery.toUpperCase())
      )
    }
    // Price sorting
    if (sortOrder === 'low-to-high') {
      result = [...result].sort(
        (a, b) => a.price - b.price
      )
    } else if (sortOrder === 'high-to-low') {
      result = [...result].sort(
        (a, b) => b.price - a.price
      )
    }

    return result
  }, [products, activeCategory, searchQuery, sortOrder])

  if (loading) return <Spinner />

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div>

      <CategoryBar
        activeCategory={activeCategory}
        onCategoryChange={(category) => {
          setActiveCategory(category)
          setSearchQuery('')
          setSortOrder('default')
        }}
      />

      <HeroBanner
        activeCategory={activeCategory}
      />

      <div className="filter-bar">

        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search shoes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">
            Sort by Price
          </option>

          <option value="low-to-high">
            Price: Low to High ↑
          </option>

          <option value="high-to-low">
            Price: High to Low ↓
          </option>
        </select>

      </div>

      <div className="home">

        <h2 className="home-title">

          {activeCategory === 'all' &&
            'All Products'}

          {activeCategory === 'mens' &&
            "Men's Shoes 👟"}

          {activeCategory === 'womens' &&
            "Women's Shoes 👠"}

          {filteredProducts.length > 0 && (
            <span className="product-count">
              ({filteredProducts.length} products)
            </span>
          )}

        </h2>

        {filteredProducts.length === 0 && (
          <div className="no-results">

            <p>
              😕 No products found!
            </p>

            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
                setSortOrder('default')
              }}
            >
              Clear Filters
            </button>

          </div>
        )}

        <div className="products-grid">

          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Home