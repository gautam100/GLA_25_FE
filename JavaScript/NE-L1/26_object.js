function cards() {
  let prodObj = [
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 59.99,
    "stock": 120,
    "rating": 4.5,
    "brand": "SoundWave",
    "description": "Noise-cancelling over-ear headphones with 20-hour battery life.",
    "image": "https://picsum.photos/seed/headphones/400/300"
  },
  {
    "id": 2,
    "name": "Smartwatch Pro X",
    "category": "Wearables",
    "price": 199.99,
    "stock": 80,
    "rating": 4.7,
    "brand": "TechTime",
    "description": "Advanced smartwatch with fitness tracking and heart-rate monitor.",
    "image": "https://picsum.photos/seed/smartwatch/400/300"
  },
  {
    "id": 3,
    "name": "4K Ultra HD TV 55-inch",
    "category": "Electronics",
    "price": 699.99,
    "stock": 35,
    "rating": 4.8,
    "brand": "VisionMax",
    "description": "Smart LED TV with voice control and HDR10 support.",
    "image": "https://picsum.photos/seed/tv/400/300"
  },
  {
    "id": 4,
    "name": "Ergonomic Office Chair",
    "category": "Furniture",
    "price": 149.99,
    "stock": 60,
    "rating": 4.3,
    "brand": "ComfortPlus",
    "description": "Adjustable mesh back chair with lumbar support.",
    "image": "https://picsum.photos/seed/officechair/400/300"
  },
  {
    "id": 5,
    "name": "Stainless Steel Water Bottle",
    "category": "Home & Kitchen",
    "price": 19.99,
    "stock": 300,
    "rating": 4.6,
    "brand": "HydroMate",
    "description": "Insulated 1L water bottle keeps drinks cold for 24 hours.",
    "image": "https://picsum.photos/seed/waterbottle/400/300"
  },
  {
    "id": 6,
    "name": "Gaming Laptop G15",
    "category": "Computers",
    "price": 1299.99,
    "stock": 25,
    "rating": 4.9,
    "brand": "PowerEdge",
    "description": "High-performance gaming laptop with RTX 4070 GPU.",
    "image": "https://picsum.photos/seed/gaminglaptop/400/300"
  },
  {
    "id": 7,
    "name": "Wireless Mouse",
    "category": "Accessories",
    "price": 24.99,
    "stock": 200,
    "rating": 4.4,
    "brand": "ClickPro",
    "description": "Ergonomic wireless mouse with silent clicks.",
    "image": "https://picsum.photos/seed/wirelessmouse/400/300"
  },
  {
    "id": 8,
    "name": "Portable Bluetooth Speaker",
    "category": "Audio",
    "price": 79.99,
    "stock": 90,
    "rating": 4.5,
    "brand": "BassBoom",
    "description": "Waterproof speaker with deep bass and 12-hour playtime.",
    "image": "https://picsum.photos/seed/bluetoothspeaker/400/300"
  },
  {
    "id": 9,
    "name": "Electric Kettle 1.5L",
    "category": "Appliances",
    "price": 39.99,
    "stock": 150,
    "rating": 4.2,
    "brand": "HomeEase",
    "description": "Fast-boiling kettle with auto shut-off and LED indicator.",
    "image": "https://picsum.photos/seed/electrickettle/400/300"
  },
  {
    "id": 10,
    "name": "Yoga Mat Pro",
    "category": "Fitness",
    "price": 29.99,
    "stock": 180,
    "rating": 4.6,
    "brand": "ZenFlex",
    "description": "Eco-friendly non-slip yoga mat with carrying strap.",
    "image": "https://picsum.photos/seed/yogamat/400/300"
  }
]

for(let prod of prodObj){
    document.getElementById("card_container").innerHTML += "<div class='card float-start' style='width: 18rem'><img src='"+prod.image+"' class='card-img-top' alt='...' /><div class='card-body'><h5 class='card-title'>"+prod.name+"</h5><p class='card-text'>"+prod.description+"</p> Price: &#8377; "+prod.price+" <a href='#' class='btn btn-primary'>Shopping</a></div></div>"
}

}
