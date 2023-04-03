function swapElements(heap, i, j ) {
  let t = heap[i];
  heap[i] = heap[j];
  heap[j] = t;
}

function maxHeapify(heap, i) {
  let lc = 2*i+1, rc = 2*i+2;
  let max = heap[i]

  if (lc < heap.length) {
    max = Math.max(max, heap[lc])
  if (rc < heap.length)
    max = Math.max(max, heap[rc])

    if (max == heap[lc]) {
      swapElements(heap, lc, i);
      minHeapify(heap, lc);
    } else if (max == heap[rc]) {
      swapElements(heap, rc, i);
      minHeapify(heap, rc);
    }
  }
}

function minHeapify(heap, i) {
  let lc = 2*i+1, rc = 2*i+2;
  let min = heap[i]

  if (lc < heap.length) {
    min = Math.min(min, heap[lc])
  if (rc < heap.length)
    min = Math.min(min, heap[rc])

    if (min == heap[lc]) {
      swapElements(heap, lc, i);
      minHeapify(heap, lc);
    } else if (min == heap[rc]) {
      swapElements(heap, rc, i);
      minHeapify(heap, rc);
    }
  }
}

function extractFromMaxHeap(heap) {
  let max = heap[0];
  heap[0] = heap[heap.length-1]
  delete heap[heap.length]
  heap.length = heap.length-1
  maxHeapify(heap, 0)
  return max;
}

function extractFromMinHeap(heap) {
  let min = heap[0];
  heap[0] = heap[heap.length-1]
  heap.pop()
  minHeapify(heap, 0)
  return min;
}


function buildMaxHeap(heap, i) {
  if (i == 0) return;
  let parent = Math.floor((i-1)/2);
  if (heap[parent] < heap[i]) {
    swapElements(heap, parent, i)
    buildMaxHeap(heap, parent)
  }
}

function buildMinHeap(heap, i) {
  if (i == 0) return;
  let parent = Math.floor((i-1)/2);
  if (heap[parent] > heap[i]) {
    swapElements(heap, parent, i)
    buildMinHeap(heap, parent)
  }
}


function addToMaxHeap(heap, e) {
  let size = heap.length;
    heap[size] = e;
    buildMaxHeap(heap, size);
}


function addToMinHeap(heap, e) {
  let size = heap.length;
    heap[size] = e;
    buildMinHeap(heap, size);
}

module.exports = {
  swapElements,
  maxHeapify,
  minHeapify,
  extractFromMaxHeap,
  extractFromMinHeap,
  buildMaxHeap,
  buildMinHeap,
  addToMaxHeap,
  addToMinHeap,
}