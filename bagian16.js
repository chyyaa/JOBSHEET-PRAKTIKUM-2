const dataSize = 10000;
const sortedData = Array.from({ length: dataSize }, (_, i) => i + 1);
const target = 10000;

function linearSearchWithCount(arr, target) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (arr[i] === target) {
      return { index: i, steps };
    }
  }
  return { index: -1, steps };
}

function binarySearchWithCount(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return { index: mid, steps };
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return { index: -1, steps };
}

const linearResult = linearSearchWithCount(sortedData, target);
const binaryResult = binarySearchWithCount(sortedData, target);

console.log(`Linear Search ($O(n)$)  : ${linearResult.steps} langkah`);
console.log(`Binary Search ($O(\\log n)$): ${binaryResult.steps} langkah`);
