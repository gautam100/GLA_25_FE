let func1 = () => {
  let prodList = [
    {
      id: 1,
      name: "Women's Handbag",
      category: "Fashion",
      price: 1899,
      brand: "Lavie",
      rating: 4.1,
      inStock: true,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
    {
      id: 2,
      name: "Wireless Keyboard and Mouse Combo",
      category: "Electronics",
      price: 2299,
      brand: "HP",
      rating: 4.4,
      inStock: false,
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
    {
      id: 3,
      name: "LED Table Lamp",
      category: "Home Decor",
      price: 1299,
      brand: "Philips",
      rating: 4.1,
      inStock: true,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
  ];

  for(let prod of prodList){

      document.getElementById("card_container").innerHTML +=
    "<div class='card' style='width: 18rem'><img src='"+prod.image+"' class='card-img-top' alt='...' /><div class='card-body'><h5 class='card-title'>"+prod.name+"</h5><div class='badge bg-success mb-2'>"+prod.category+"</div>   <p class='card-text'><mark>&#8377; "+prod.price+"</mark></p><a href='#' class='btn btn-primary'>Buy Now</a></div></div>";

  }


};
