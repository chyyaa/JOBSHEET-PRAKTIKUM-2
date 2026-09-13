class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
}

const requestQueue = new Queue();

requestQueue.enqueue("Request 1");
requestQueue.enqueue("Request 2");
requestQueue.enqueue("Request 3");

console.log("Isi Queue:", requestQueue.items);

console.log("Request berikutnya:", requestQueue.peek());

console.log("Request diproses:", requestQueue.dequeue());
console.log("Request diproses:", requestQueue.dequeue());

console.log("Sisa Queue:", requestQueue.items);
