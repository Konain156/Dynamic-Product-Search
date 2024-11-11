const products = [
    { name: "Red Shirt", inStock: true },
    { name: "Blue Shirt", inStock: false },
    { name: "Purple Shirt", inStock: true },
    { name: "Black Shirt", inStock: false },
    { name: "Pink Shirt", inStock: true }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const button = document.createElement("button");
        button.textContent = `${product.name} (${product.inStock ? "In Stock" : "Out of Stock"})`;
        button.className = "product-button";
        if (product.inStock) {
            button.classList.add("in-stock"); 
            button.disabled = false;
        } else {
            button.classList.add("out-of-stock"); 
            button.disabled = true;
        }

        productList.appendChild(button);
    });
}

function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
}

document.getElementById("searchButton").addEventListener("click", searchProducts);
