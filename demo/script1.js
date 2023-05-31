// Sample product data
const products = [
    {
      name: "Product 1",
      image: "All Images/shirt5.png",
      price: "$19.99"
    },
    {
      name: "Product 2",
      image: "All Images/shirt6.png",
      price: "$24.99"
    },
    {
      name: "Product 3",
      image: "All Images/shirt4.png",
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
  