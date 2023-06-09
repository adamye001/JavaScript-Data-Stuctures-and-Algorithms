/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Map Method
// Time Complexity: O(n * log n)
// var topKFrequent = function (nums, k) {
//   const map = new Map();
//   nums.forEach((n) => {
//     map.set(n, map.has(n) ? map.get(n) + 1 : 1);
//   });
//   const list = Array.from(map).sort((a, b) => b[1] - a[1]);
//   return list.slice(0, k).map((n) => n[0]);
// };

// MinHeap Method
// Time Complexity: O(n * log k)
// Space Complexity: O(n)
class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) {
    // return Math.floor((i - 1) / 2);
    return (i - 1) >> 1;
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const h = new MinHeap();
  map.forEach((value, key) => {
    h.insert({ value, key });
    if (h.size() > k) {
      h.pop();
    }
  });
  return h.heap.map((a) => a.key);
};
