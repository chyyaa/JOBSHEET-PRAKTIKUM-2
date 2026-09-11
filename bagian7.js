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

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return -1;
}

const numbers = [10, 20, 30, 40, 50, 60, 70];

console.log("Cari 50:", binarySearch(numbers, 50));
console.log("Cari 25:", binarySearch(numbers, 25));

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

console.log("Produk setelah diurutkan berdasarkan harga:");
console.log(sortedProducts);

function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedProducts[mid].price === targetPrice) {
      return mid;
    }
    if (sortedProducts[mid].price < targetPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const targetPrice = 800;

const result = binarySearchByPrice(sortedProducts, targetPrice);

// Menampilkan hasil pencarian
if (result !== -1) {
  console.log("Produk ditemukan:");

  console.log(sortedProducts[result]);
} else {
  console.log("Produk dengan harga", targetPrice, "tidak ditemukan.");
}
