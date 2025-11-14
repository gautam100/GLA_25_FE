function cards() {
  let prodData = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 1999,
      category: "Electronics",
      image: "https://picsum.photos/seed/headphone/600/400",
    },
    {
      id: 2,
      name: "Smart LED Watch",
      price: 2499,
      category: "Wearables",
      image: "https://picsum.photos/seed/watch/600/400",
    },
    {
      id: 3,
      name: "Sports Running Shoes",
      price: 1799,
      category: "Footwear",
      image: "https://picsum.photos/seed/shoes/600/400",
    },
    {
      id: 4,
      name: "Stylish Sunglasses",
      price: 799,
      category: "Fashion",
      image: "https://picsum.photos/seed/sunglass/600/400",
    },
    {
      id: 5,
      name: "Gaming RGB Keyboard",
      price: 1299,
      category: "Electronics",
      image: "https://picsum.photos/seed/keyboard/600/400",
    },
    {
      id: 6,
      name: "Cotton T-Shirt",
      price: 499,
      category: "Clothing",
      image: "https://picsum.photos/seed/tshirt/600/400",
    },
    {
      id: 7,
      name: "Laptop Backpack",
      price: 1499,
      category: "Accessories",
      image: "https://picsum.photos/seed/backpack/600/400",
    },
    {
      id: 8,
      name: "Portable Bluetooth Speaker",
      price: 999,
      category: "Audio",
      image: "https://picsum.photos/seed/speaker/600/400",
    },
    {
      id: 9,
      name: "Stainless Steel Water Bottle",
      price: 399,
      category: "Home & Kitchen",
      image: "https://picsum.photos/seed/bottle/600/400",
    },
    {
      id: 10,
      name: "Modern Table Lamp",
      price: 899,
      category: "Home Decor",
      image: "https://picsum.photos/seed/lamp/600/400",
    },
  ];

  for (let prod of prodData) {
    document.getElementById("card_container").innerHTML +=
      "<div class='card float-start' style='width: 18rem'><img src='"+prod.image+"' class='card-img-top' alt='...' /><div class='card-body'><h5 class='card-title'>"+ prod.name+"</h5><p class='card-text'>"+prod.category+"</p><p>&#8377;<mark>"+prod.price+"</mark></p><a href='#' class='btn btn-primary'>Shopping</a></div></div>";
  }
}
