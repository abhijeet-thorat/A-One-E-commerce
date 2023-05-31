// Sample product data
const products = [
    {
      name: "Product 1",
      image: "product1.jpg",
      price: "$19.99"
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      price: "$24.99"
    },
    {
      name: "Product 3",
      image: "product3.jpg",
      price: "$14.99"
    }
  ];
  
  // Function to generate product elements
  function generateProductElements() {
    const productContainer = document.getElementById("product-container");
  
    // Iterate over the product data and create the necessary HTML elements
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-top");
  
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productElement.appendChild(productImage);
  
      const overlay = document.createElement("div");
      overlay.classList.add("overlay-right");
  
      const addToCartButton = document.createElement("button");
      addToCartButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
      overlay.appendChild(addToCartButton);
  
      productElement.appendChild(overlay);
  
      const productDetails = document.createElement("div");
      productDetails.classList.add("product-bottom");
  
      const productName = document.createElement("h3");
      productName.innerText = product.name;
      productDetails.appendChild(productName);
  
      const productPrice = document.createElement("h5");
      productPrice.innerText = product.price;
      productDetails.appendChild(productPrice);
  
      productElement.appendChild(productDetails);
  
      productContainer.appendChild(productElement);
    });
  }
  
  // Call the function to generate the product elements
  generateProductElements();
  