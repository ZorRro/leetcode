// this is a min heap
let heap = [3,7,10, 14,13, 18, 20];

const getLeft = (i) => { return (2*i)+1}
const getRight = (i) => { return (2*i)+2}
const getParent = (i) => {return Math.floor(Math.abs((i-1)/2)) }
const minHeapify = (heap, i) => {
  let current = heap[i];
  const leftChild = getLeft(i);
  const rightChild = getRight(i);
  let left = null, right = null;
  if (leftChild < heap.length ) {
    left = heap[leftChild]
  } else return;
  if (rightChild < heap.length )
    right = heap[rightChild]
  else return;

  let minimum = Math.min(current, left, right);
  if (minimum == current) return;
  else {
    if( left == minimum) {
      heap[leftChild] = current;
      heap[i] = left;
      minHeapify(heap, leftChild)
    } else {
      heap[rightChild] = current;
      heap[i] = right;
      minHeapify(heap, rightChild)
    }
  }
}

const extractMin = (heap) => {
  let min  = heap[0];
  let last = heap[heap.length-1];
  heap[0] = last
  heap.length = heap.length - 1
  console.log(min)
  minHeapify(heap, 0);
  heap.forEach(x => console.log(x + ','))
}

extractMin(heap);