const products = [

  // ========================
  // MEN'S CASUAL SHOES
  // ========================
  {
    id: 101,
    title: "Nike Air Jordan 1 Red And Black",
    price: 149.99,
    rating: 4.77,
    section: 'mens',
    type: 'casual',
    brand: 'Nike',
    stock: 20,
    description: "The iconic Air Jordan 1 in bold red and black colorway. A timeless silhouette that blends street style with athletic performance.",
    images: ["https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png"]
  },
  {
    id: 102,
    title: "Puma Future Rider Trainers",
    price: 89.99,
    rating: 4.9,
    section: 'mens',
    type: 'casual',
    brand: 'Puma',
    stock: 18,
    description: "Retro-inspired trainers with modern comfort technology and vibrant colorways.",
    images: ["https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png"]
  },
  {
    id: 103,
    title: "Sports Sneakers Off White & Red",
    price: 119.99,
    rating: 4.77,
    section: 'mens',
    type: 'casual',
    brand: 'Off White',
    stock: 12,
    description: "Premium off-white and red sneakers combining luxury design with everyday comfort.",
    images: ["https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20%26%20Red/1.png"]
  },
  {
    id: 104,
    title: "Sports Sneakers Off White Red",
    price: 112.99,
    rating: 4.54,
    section: 'mens',
    type: 'casual',
    brand: 'Off White',
    stock: 10,
    description: "Stylish off-white red sneakers with premium materials and bold design.",
    images: ["https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png"]
  },

  // ========================
  // MEN'S SPORTS SHOES
  // ========================
  {
    id: 105,
    title: "Nike Baseball Cleats",
    price: 79.99,
    rating: 3.88,
    section: 'mens',
    type: 'sports',
    brand: 'Nike',
    stock: 15,
    description: "High-performance baseball cleats designed for maximum grip and speed on the field.",
    images: ["https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png"]
  },
  {
    id: 106,
    title: "Nike Air Max Running Shoes",
    price: 134.99,
    rating: 4.8,
    section: 'mens',
    type: 'sports',
    brand: 'Nike',
    stock: 25,
    description: "Engineered for long-distance running with Air Max cushioning for superior comfort.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"]
  },
  {
    id: 107,
    title: "Adidas Ultraboost 22",
    price: 179.99,
    rating: 4.9,
    section: 'mens',
    type: 'sports',
    brand: 'Adidas',
    stock: 20,
    description: "Ultimate running shoe with Boost midsole for incredible energy return.",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400"]
  },
  {
    id: 108,
    title: "Puma Velocity Nitro 2",
    price: 109.99,
    rating: 4.6,
    section: 'mens',
    type: 'sports',
    brand: 'Puma',
    stock: 18,
    description: "Lightweight racing shoe with Nitro foam technology for explosive speed.",
    images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"]
  },
  {
    id: 109,
    title: "Nike Football Boots Mercurial",
    price: 159.99,
    rating: 4.7,
    section: 'mens',
    type: 'sports',
    brand: 'Nike',
    stock: 14,
    description: "Speed-focused football boots with textured upper for better ball control.",
    images: ["https://images.unsplash.com/photo-1556906781-9a412961a28c?w=400"]
  },

  // ========================
  // MEN'S FORMAL SHOES
  // ========================
  {
    id: 2001,
    title: "Oxford Leather Derby Shoes",
    price: 129.99,
    rating: 4.7,
    section: 'mens',
    type: 'formal',
    brand: 'ClassicStep',
    stock: 15,
    description: "Classic oxford leather derby shoes perfect for business and formal occasions.",
    images: [""]
  },
  {
    id: 2002,
    title: "Brogue Wingtip Dress Shoes",
    price: 149.99,
    rating: 4.6,
    section: 'mens',
    type: 'formal',
    brand: 'EliteWear',
    stock: 12,
    description: "Elegant brogue wingtip shoes crafted from premium leather.",
    images: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400"]
  },
  {
    id: 2003,
    title: "Chelsea Boots Formal",
    price: 159.99,
    rating: 4.8,
    section: 'mens',
    type: 'formal',
    brand: 'LuxuryStep',
    stock: 10,
    description: "Sleek chelsea boots that transition from office to evening perfectly.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"]
  },
  {
    id: 2004,
    title: "Monk Strap Dress Shoes",
    price: 139.99,
    rating: 4.5,
    section: 'mens',
    type: 'formal',
    brand: 'FormalEdge',
    stock: 8,
    description: "Sophisticated monk strap shoes with premium finish for formal settings.",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400"]
  },

  // ========================
  // WOMEN'S CASUAL SHOES
  // ========================
  {
    id: 201,
    title: "Black & Brown Slipper",
    price: 29.99,
    rating: 4.4,
    section: 'womens',
    type: 'casual',
    brand: 'ComfortPlus',
    stock: 30,
    description: "Soft and comfortable everyday slippers in classic black and brown tones.",
    images: ["https://cdn.dummyjson.com/products/images/womens-shoes/Black%20%26%20Brown%20Slipper/1.png"]
  },
  {
    id: 202,
    title: "Calvin Klein Heel Shoes",
    price: 139.99,
    rating: 4.6,
    section: 'womens',
    type: 'casual',
    brand: 'Calvin Klein',
    stock: 14,
    description: "Sophisticated Calvin Klein heels that blend elegance with comfort for everyday wear.",
    images: ["https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/1.png"]
  },
  {
    id: 203,
    title: "Golden Shoes Woman",
    price: 74.99,
    rating: 4.7,
    section: 'womens',
    type: 'casual',
    brand: 'GoldStep',
    stock: 16,
    description: "Glamorous golden shoes that add a touch of luxury to any casual outfit.",
    images: ["https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/1.png"]
  },
  {
    id: 204,
    title: "Heel shoes",
    price: 49.99,
    rating: 4.3,
    section: 'womens',
    type: 'casual',
    brand: 'StyleStep',
    stock: 22,
    description: "Versatile heel shoes suitable for both casual and semi-formal occasions.",
    images: ["https://cdn.dummyjson.com/products/images/womens-shoes/Heel%20shoes/1.png"]
  },
  {
    id: 205,
    title: "Knit Sneakers",
    price: 64.99,
    rating: 4.5,
    section: 'womens',
    type: 'casual',
    brand: 'KnitWalk',
    stock: 25,
    description: "Breathable knit sneakers with flexible sole for all-day comfort.",
    images: ["https://cdn.dummyjson.com/products/images/womens-shoes/Knit%20Sneakers/1.png"]
  },

  // ========================
  // WOMEN'S SPORTS SHOES
  // ========================
  {
    id: 206,
    title: "Nike Women's Air Zoom",
    price: 124.99,
    rating: 4.8,
    section: 'womens',
    type: 'sports',
    brand: 'Nike',
    stock: 20,
    description: "Responsive running shoe with Zoom Air cushioning for female athletes.",
    images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400"]
  },
  {
    id: 207,
    title: "Adidas Women's Ultraboost",
    price: 169.99,
    rating: 4.9,
    section: 'womens',
    type: 'sports',
    brand: 'Adidas',
    stock: 18,
    description: "High-performance running shoes with Boost cushioning for women.",
    images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400"]
  },
  {
    id: 208,
    title: "Puma Women's Running Shoes",
    price: 94.99,
    rating: 4.5,
    section: 'womens',
    type: 'sports',
    brand: 'Puma',
    stock: 22,
    description: "Lightweight and breathable running shoes designed for women.",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"]
  },

  // ========================
  // WOMEN'S FORMAL SHOES
  // ========================
  {
    id: 3001,
    title: "Women's Stiletto Heels",
    price: 119.99,
    rating: 4.6,
    section: 'womens',
    type: 'formal',
    brand: 'ElegantStep',
    stock: 15,
    description: "Elegant stiletto heels perfect for formal events and parties.",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"]
  },
  {
    id: 3002,
    title: "Women's Block Heel Pumps",
    price: 99.99,
    rating: 4.5,
    section: 'womens',
    type: 'formal',
    brand: 'PumpQueen',
    stock: 18,
    description: "Comfortable block heel pumps for all-day office wear.",
    images: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400"]
  },
  {
    id: 3003,
    title: "Women's Pointed Toe Flats",
    price: 89.99,
    rating: 4.4,
    section: 'womens',
    type: 'formal',
    brand: 'FlatLuxe',
    stock: 20,
    description: "Classic pointed toe flats for a polished professional look.",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"]
  },
  {
    id: 3004,
    title: "Women's Kitten Heel Mules",
    price: 109.99,
    rating: 4.3,
    section: 'womens',
    type: 'formal',
    brand: 'MuleLux',
    stock: 14,
    description: "Chic kitten heel mules that blend comfort with elegance.",
    images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400"]
  },

  // ========================
  // KIDS CASUAL SHOES
  // ========================
  {
    id: 1001,
    title: "Nike Kids Air Max",
    price: 59.99,
    rating: 4.5,
    section: 'kids',
    type: 'casual',
    brand: 'Nike',
    stock: 20,
    description: "Comfortable everyday sneakers for active kids.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"]
  },
  {
    id: 1002,
    title: "Adidas Kids Superstar",
    price: 49.99,
    rating: 4.3,
    section: 'kids',
    type: 'casual',
    brand: 'Adidas',
    stock: 15,
    description: "Classic casual sneakers loved by kids everywhere.",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400"]
  },
  {
    id: 1003,
    title: "Puma Kids Speedcat",
    price: 44.99,
    rating: 4.2,
    section: 'kids',
    type: 'casual',
    brand: 'Puma',
    stock: 18,
    description: "Lightweight and stylish casual shoes for kids.",
    images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"]
  },
  {
    id: 1004,
    title: "Converse Kids All Star",
    price: 34.99,
    rating: 4.1,
    section: 'kids',
    type: 'casual',
    brand: 'Converse',
    stock: 25,
    description: "Iconic canvas sneakers perfect for everyday wear.",
    images: ["https://images.unsplash.com/photo-1494496195158-c3bc975bb9b2?w=400"]
  },

  // ========================
  // KIDS FORMAL SHOES
  // ========================
  {
    id: 1005,
    title: "Kids Oxford Black Shoes",
    price: 39.99,
    rating: 4.4,
    section: 'kids',
    type: 'formal',
    brand: 'SchoolStep',
    stock: 12,
    description: "Smart formal oxford shoes perfect for school and events.",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"]
  },
  {
    id: 1006,
    title: "Kids Patent Leather Shoes",
    price: 44.99,
    rating: 4.3,
    section: 'kids',
    type: 'formal',
    brand: 'PatentKids',
    stock: 10,
    description: "Shiny patent leather shoes for special occasions.",
    images: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400"]
  },
  {
    id: 1007,
    title: "Kids Derby Formal Shoes",
    price: 42.99,
    rating: 4.2,
    section: 'kids',
    type: 'formal',
    brand: 'DerbyKids',
    stock: 14,
    description: "Classic derby shoes for school uniforms and events.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"]
  },

  // ========================
  // KIDS SPORTS SHOES
  // ========================
  {
    id: 1008,
    title: "Nike Kids Football Boots",
    price: 54.99,
    rating: 4.6,
    section: 'kids',
    type: 'sports',
    brand: 'Nike',
    stock: 20,
    description: "High performance football boots for young athletes.",
    images: ["https://images.unsplash.com/photo-1556906781-9a412961a28c?w=400"]
  },
  {
    id: 1009,
    title: "Adidas Kids Running Shoes",
    price: 49.99,
    rating: 4.5,
    section: 'kids',
    type: 'sports',
    brand: 'Adidas',
    stock: 22,
    description: "Lightweight running shoes built for speed and comfort.",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"]
  },
  {
    id: 1010,
    title: "Puma Kids Basketball Shoes",
    price: 52.99,
    rating: 4.4,
    section: 'kids',
    type: 'sports',
    brand: 'Puma',
    stock: 16,
    description: "Grippy basketball shoes for young players.",
    images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400"]
  },
]

export default products