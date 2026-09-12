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

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

class SearchHistory {
  constructor() {
    this.stack = new Stack();
  }
  search(keyword) {
    this.stack.push(keyword);
    console.log(`Mencari: "${keyword}"`);
  }
  undoSearch() {
    if (this.stack.isEmpty()) {
      console.log("Tidak ada riwayat pencarian");
      return null;
    }

    const undone = this.stack.pop();
    console.log(`Undo dari: "${undone}"`);

    if (this.stack.isEmpty()) {
      console.log("Kembali ke: (tidak ada pencarian sebelumnya)");
      return null;
    }
    const previous = this.stack.peek();
    console.log(`Kembali ke: "${previous}"`);
    return previous;
  }
}

const history = new SearchHistory();
history.search("laptop");
history.search("phone");
history.undoSearch();
history.undoSearch();
history.undoSearch();
