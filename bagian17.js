const products = [
  {
    title: "Laptop",
    thumbnail: "gambar/laptop.png",
    category: "laptops",
    price: 1200,
    rating: 4.5,
  },
  {
    title: "Smartphone",
    thumbnail: "gambar/hp.png",
    category: "smartphones",
    price: 800,
    rating: 4.2,
  },
];

function renderProducts(products) {
  const container = document.querySelector("#product-list");

  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
            <img src="${product.thumbnail}" width="150">

            <h3>${product.title}</h3>

            <p>${product.category}</p>

            <p>Harga: $${product.price}</p>

            <p>Rating: ${product.rating}</p>
        `;

    container.append(card);
  }
}

renderProducts(products);
