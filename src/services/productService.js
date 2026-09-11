const API_URL = 'https://dummyjson.com/products/category'

const formatProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    images: product.images,
    rating: product.rating,

    // Convert API category into our project category
    section:
    product.category === 'mens-shoes' ? 'mens'
      : product.category === 'womens-shoes'
          ? 'womens'
          : 'other',

    // We are no longer using casual/formal/sports
    type: 'all',

    // Keep other useful API information
    brand: product.brand || 'Unknown',
    description: product.description,
    stock: product.stock
  }
}

export const fetchProducts = async () => {
  const [menResponse, womenResponse] = await Promise.all([
    fetch(`${API_URL}/mens-shoes`),
    fetch(`${API_URL}/womens-shoes`)
  ])

  if (!menResponse.ok || !womenResponse.ok) {
    throw new Error('Failed to fetch shoe products')
  }

  const menData = await menResponse.json()
  const womenData = await womenResponse.json()

  const products = [
    ...menData.products,
    ...womenData.products
  ]

  return products.map(formatProduct)
}


export const fetchProductById = async (id) => {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  )

  if (!response.ok) {
    throw new Error('Product not found')
  }

  const product = await response.json()

  return formatProduct(product)
}