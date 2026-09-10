const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Keyboard", price: 75, category: "computer", stock: 10 },
  { id: 5, title: "Mouse", price: 40, category: "computer", stock: 20 },
  { id: 6, title: "Monitor", price: 300, category: "computer", stock: 7 },
  { id: 7, title: "Tablet", price: 500, category: "tablets", stock: 8 },
  { id: 8, title: "Smartwatch", price: 200, category: "wearables", stock: 12 },
  { id: 9, title: "Bluetooth Speaker", price: 80, category: "audio", stock: 6 },
  { id: 10, title: "Webcam", price: 60, category: "computer", stock: 9 },
  { id: 11, title: "Printer", price: 150, category: "office", stock: 4 },
  {
    id: 12,
    title: "USB Flash Drive",
    price: 25,
    category: "storage",
    stock: 30,
  },
  {
    id: 13,
    title: "External Hard Drive",
    price: 120,
    category: "storage",
    stock: 10,
  },
  { id: 14, title: "SSD", price: 100, category: "storage", stock: 14 },
  {
    id: 15,
    title: "Power Bank",
    price: 50,
    category: "accessories",
    stock: 18,
  },
  {
    id: 16,
    title: "Phone Charger",
    price: 30,
    category: "accessories",
    stock: 25,
  },
  { id: 17, title: "USB Cable", price: 15, category: "accessories", stock: 40 },
  { id: 18, title: "Laptop Bag", price: 70, category: "bags", stock: 11 },
  {
    id: 19,
    title: "Gaming Chair",
    price: 250,
    category: "furniture",
    stock: 5,
  },
  { id: 20, title: "Desk Lamp", price: 45, category: "office", stock: 16 },
  { id: 21, title: "Microphone", price: 110, category: "audio", stock: 7 },
  {
    id: 22,
    title: "Game Controller",
    price: 90,
    category: "gaming",
    stock: 13,
  },
  { id: 23, title: "Gaming Mouse", price: 65, category: "gaming", stock: 9 },
  {
    id: 24,
    title: "Gaming Keyboard",
    price: 120,
    category: "gaming",
    stock: 6,
  },
  { id: 25, title: "VR Headset", price: 400, category: "gaming", stock: 3 },
  {
    id: 26,
    title: "Digital Camera",
    price: 600,
    category: "cameras",
    stock: 4,
  },
  { id: 27, title: "Tripod", price: 55, category: "cameras", stock: 12 },
  { id: 28, title: "Smart TV", price: 700, category: "televisions", stock: 5 },
  { id: 29, title: "Router", price: 85, category: "networking", stock: 10 },
  {
    id: 30,
    title: "WiFi Adapter",
    price: 35,
    category: "networking",
    stock: 20,
  },
];

function findProductById(products, id) {
  return products.find((product) => product.id === id);
}

function getLowStockProducts(products) {
  return products.filter((product) => product.stock < 10);
}

function updateStock(products, id, newStock) {
  return products.map((p) => (p.id === id ? { ...p, stock: newStock } : p));
}

console.log("=== Hasil Latihan 2.1 (Cari ID 8) ===");
console.log(findProductById(products, 8));

console.log("\n=== Hasil Latihan 2.2 (Stok < 10) ===");
console.log(getLowStockProducts(products));

console.log("\n=== Hasil Latihan 2.3 (Update Stok ID 1 jadi 20) ===");
const updatedProducts = updateStock(products, 1, 20);
console.log("Produk ID 1 setelah update:", findProductById(updatedProducts, 1));
console.log(
  "Produk asli ID 1 tetap tidak berubah (Immutable):",
  findProductById(products, 1),
);
