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
    images: ["/shopease/Jordan_Red_And_Black.png"]
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
    images: ["/shopease/Puma_Future_Rider_Trainers.png"]
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
    images: ["/shopease/Sports_Sneakers_Off_White_&_Red.png"]
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
    images: ["/shopease/Sports_Sneakers_Blue.png"]
  },

  // ========================
  // MEN'S SPORTS SHOES
  // ========================
  {
    id: 105,
    title: "Nike Blue Sneakers",
    price: 79.99,
    rating: 3.88,
    section: 'mens',
    type: 'sports',
    brand: 'Nike',
    stock: 15,
    description: "High-performance baseball cleats designed for maximum grip and speed on the field.",
    images: ["/shopease/Nike_Blue_Sneakers.png"]
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
  // ========================
  // MEN'S FORMAL SHOES
  // ========================
  {
    id: 2002,
    title: "Formal Brown Shoe",
    price: 149.99,
    rating: 4.6,
    section: 'mens',
    type: 'formal',
    brand: 'EliteWear',
    stock: 12,
    description: "Elegant brogue wingtip shoes crafted from premium leather.",
    images: ["/shopease/Formal_Brown_Shoe.png"]
  },
  {
    id: 2003,
    title: "Formal Black Chelsea",
    price: 299.99,
    rating: 4.6,
    section: 'mens',
    type: 'formal',
    brand: 'EliteWear',
    stock: 12,
    description: "Elegant brogue wingtip shoes crafted from premium leather.",
    images: ["/shopease/Formal_Black_Chelsea.png"]
  },
  {
    id: 2004,
    title: "Formal White Shoe",
    price: 249.99,
    rating: 4.6,
    section: 'mens',
    type: 'formal',
    brand: 'EliteWear',
    stock: 12,
    description: "Elegant brogue wingtip shoes crafted from premium leather.",
    images: ["/shopease/Formal_White_Shoe.png"]
  },
  {
    id: 2005,
    title: "Formal Brown Loafers",
    price: 200.99,
    rating: 4.6,
    section: 'mens',
    type: 'formal',
    brand: 'EliteWear',
    stock: 12,
    description: "Elegant brogue wingtip shoes crafted from premium leather.",
    images: ["/shopease/Brown_Loafers.png"]
  },

  // ========================
  // WOMEN'S CASUAL SHOES
  // ========================
  {
    id: 201,
    title: "OFF White Sneakers",
    price: 29.99,
    rating: 4.4,
    section: 'womens',
    type: 'casual',
    brand: 'ComfortPlus',
    stock: 30,
    description: "Soft and comfortable everyday slippers in classic black and brown tones.",
    images: ["/shopease/OffWhite_Sneakers.png"]
  },
  {
    id: 202,
    title: "Black & White Sneakers",
    price: 139.99,
    rating: 4.6,
    section: 'womens',
    type: 'casual',
    brand: 'Calvin Klein',
    stock: 14,
    description: "Sophisticated Calvin Klein heels that blend elegance with comfort for everyday wear.",
    images: ["/shopease/Black_Sneakers.png"]
  },
  {
    id: 203,
    title: "Charcoal Boots",
    price: 74.99,
    rating: 4.7,
    section: 'womens',
    type: 'casual',
    brand: 'GoldStep',
    stock: 16,
    description: "Glamorous golden shoes that add a touch of luxury to any casual outfit.",
    images: ["/shopease/Charcoal_Boots.png"]
  },
  {
    id: 204,
    title: "Brown Boots",
    price: 74.99,
    rating: 4.7,
    section: 'womens',
    type: 'casual',
    brand: 'GoldStep',
    stock: 16,
    description: "Glamorous golden shoes that add a touch of luxury to any casual outfit.",
    images: ["/shopease/Brown_Boots.png"]
  },
  // ========================
  // WOMEN'S SPORTS SHOES
  // ========================
  {
    id: 206,
    title: "White Sports Shoe",
    price: 124.99,
    rating: 4.8,
    section: 'womens',
    type: 'sports',
    brand: 'Nike',
    stock: 20,
    description: "Responsive running shoe with Zoom Air cushioning for female athletes.",
    images: ["/shopease/White_Sports.png"]
  },
  {
    id: 207,
    title: "Grey Sports Shoe",
    price: 169.99,
    rating: 4.9,
    section: 'womens',
    type: 'sports',
    brand: 'Adidas',
    stock: 18,
    description: "High-performance running shoes with Boost cushioning for women.",
    images: ["/shopease/Grey_Sports.png"]
  },
  {
    id: 208,
    title: "Blue Sports",
    price: 94.99,
    rating: 4.5,
    section: 'womens',
    type: 'sports',
    brand: 'Puma',
    stock: 22,
    description: "Lightweight and breathable running shoes designed for women.",
    images: ["/shopease/Blue_Sports.png"]
  },
  {
    id: 209,
    title: "Pink Sports",
    price: 94.99,
    rating: 4.5,
    section: 'womens',
    type: 'sports',
    brand: 'Puma',
    stock: 22,
    description: "Lightweight and breathable running shoes designed for women.",
    images: ["/shopease/Pink_Sports.png"]
  },

  // ========================
  // WOMEN'S FORMAL SHOES
  // ========================
  {
    id: 3001,
    title: "Formal Brown Heels",
    price: 129.99,
    rating: 4.6,
    section: 'womens',
    type: 'formal',
    brand: 'ElegantStep',
    stock: 15,
    description: "Elegant stiletto heels perfect for formal events and parties.",
    images: ["/shopease/Formal_Brown_Heels.png"]
  },
  {
    id: 3002,
    title: "Formal Black Heels",
    price: 189.99,
    rating: 4.6,
    section: 'womens',
    type: 'formal',
    brand: 'ElegantStep',
    stock: 15,
    description: "Elegant stiletto heels perfect for formal events and parties.",
    images: ["/shopease/Formal_Black_Heels.png"]
  },
  {
    id: 3003,
    title: "Formal White Heels",
    price: 209.99,
    rating: 4.6,
    section: 'womens',
    type: 'formal',
    brand: 'ElegantStep',
    stock: 15,
    description: "Elegant stiletto heels perfect for formal events and parties.",
    images: ["/shopease/Formal_White_Heels.png"]
  },
  {
    id: 3004,
    title: "Formal Pink Heels",
    price: 259.99,
    rating: 4.6,
    section: 'womens',
    type: 'formal',
    brand: 'ElegantStep',
    stock: 15,
    description: "Elegant stiletto heels perfect for formal events and parties.",
    images: ["/shopease/Formal_Pink_Heels.png"]
  },

  // ========================
  // KIDS CASUAL SHOES
  // ========================
  {
    id: 1001,
    title: "Kids Casual Blue Shoes",
    price: 59.99,
    rating: 4.5,
    section: 'kids',
    type: 'casual',
    brand: 'Nike',
    stock: 20,
    description: "Comfortable everyday sneakers for active kids.",
    images: ["/shopease/Kids_Casual_Shoe1.png"]
  },
  {
    id: 1002,
    title: "Casual White Shoes",
    price: 49.99,
    rating: 4.3,
    section: 'kids',
    type: 'casual',
    brand: 'Adidas',
    stock: 15,
    description: "Classic casual sneakers loved by kids everywhere.",
    images: ["/shopease/Kids_Casual_White_Shoe.png"]
  },
  // ========================
  // KIDS FORMAL SHOES
  // ========================
  {
    id: 1006,
    title: "Kids Formal Black Shoes",
    price: 44.99,
    rating: 4.3,
    section: 'kids',
    type: 'formal',
    brand: 'PatentKids',
    stock: 10,
    description: "Shiny patent leather shoes for special occasions.",
    images: ["/shopease/Kids_Formal_Shoes.png"]
  },
  {
    id: 1007,
    title: "Kids Formal Brown Shoes",
    price: 44.99,
    rating: 4.3,
    section: 'kids',
    type: 'formal',
    brand: 'PatentKids',
    stock: 10,
    description: "Shiny patent leather shoes for special occasions.",
    images: ["/shopease/Kids_Formal_Shoes2.png"]
  },
  // ========================
  // KIDS SPORTS SHOES
  // ========================
  ,
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
    images: ["/shopease/Kids_Sports.png"]
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
    images: ["/shopease/Kids_Sports_Shoes2.png"]
  }
]

export default products