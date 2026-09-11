const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
];

function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
products.sort((a, b) => a.price - b.price);
function sortProducts(products, sortBy) {
  const sorted = [...products];
  if (sortBy === "price-asc") {
    return sorted.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "price-desc") {
    return sorted.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    return sorted.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "title") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sorted;
}

console.log(sortProducts(products, "price-asc"));
console.log(sortProducts(products, "price-desc"));
console.log(sortProducts(products, "rating"));
console.log(sortProducts(products, "title"));
