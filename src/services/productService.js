// // import products from '../data/products'

// // export const fetchProducts = async () => {
// //   return products
// // }
// // export const fetchProductById = async (id) => {
// //   const product = products.find(p => p.id === Number(id))
// //   if (!product) throw new Error('Product not found')
// //   return product
// // }


// // const API_URL = 'https://dummyjson.com/products/category/mens-shoes'

// // export const fetchProducts = async () => {
// //   const response = await fetch(API_URL)

// //   if (!response.ok) {
// //     throw new Error('Failed to fetch shoe products')
// //   }

// //   const data = await response.json()

// //   return data.products
// // }

// // export const fetchProductById = async (id) => {
// //   const response = await fetch(
// //     `https://dummyjson.com/products/${id}`
// //   )

// //   if (!response.ok) {
// //     throw new Error('Product not found')
// //   }

// //   return await response.json()
// // }



const API_URL = 'https://dummyjson.com/products/category'
import products from '../data/products'

const formatProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    images: product.images,
    rating: product.rating,

    // Convert API category into our project category
    section:
      product.category === 'mens-shoes'
        ? 'mens'
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




// import products from '../data/products'

// const API_URL = 'https://dummyjson.com/products/category'

// // Format product to only include API data (price and images)
// const formatProduct = (product) => {
//   return {
//     id: product.id,
//     title: product.title,
//     price: product.price,
//     images: product.images,
//     rating: product.rating
//   }
// }

// // Merge API product with local product data - match by title
// const mergeWithLocalData = (apiProduct) => {
//   const localProduct = products.find(p => p.title.toLowerCase() === apiProduct.title.toLowerCase())
//   return {
//     ...apiProduct,
//     description: localProduct?.description || '',
//     section: localProduct?.section || 'mens',
//     type: localProduct?.type || 'casual',
//     brand: localProduct?.brand || apiProduct.brand || 'Unknown',
//     stock: localProduct?.stock || 10
//   }
// }

// export const fetchProducts = async () => {
//   const [menResponse, womenResponse] = await Promise.all([
//     fetch(`${API_URL}/mens-shoes`),
//     fetch(`${API_URL}/womens-shoes`)
//   ])

//   if (!menResponse.ok || !womenResponse.ok) {
//     throw new Error('Failed to fetch shoe products')
//   }

//   const menData = await menResponse.json()
//   const womenData = await womenResponse.json()

//   const allProducts = [
//     ...menData.products,
//     ...womenData.products
//   ]

//   // Format each product and merge with local data
//   return allProducts.map(product => mergeWithLocalData(formatProduct(product)))
// }

// export const fetchProductById = async (id) => {
//   const response = await fetch(
//     `https://dummyjson.com/products/${id}`
//   )

//   if (!response.ok) {
//     throw new Error('Product not found')
//   }

//   const product = await response.json()

//   // Format and merge with local data
//   return mergeWithLocalData(formatProduct(product))
// }