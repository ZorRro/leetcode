let arr = ['d','d', 'd','k','k','k','k','f','f','o','o','o','o','o','o','m','m','m','z','z','z','z','z','z','z','z','z','z']

function swapElements(heap, i, j ) {
  let t = heap[i];
  heap[i] = heap[j];
  heap[j] = t;
}

function maxHeapify(heap, i) {
  let lc = 2*i+1, rc = 2*i+2;
  if (lc < heap.length && heap[i][0][1] < heap[lc][0][1]) {
    swapElements(heap, lc, i)
    maxHeapify(heap, lc);
  } else if (rc < heap.length && heap[i][0][1] < heap[rc][0][1]) {
    swapElements(heap, rc, i);
    maxHeapify(heap, rc);
  } else return;
}

function extract(heap) {
  let max = heap[0];
  heap[0] = heap[heap.length-1]
  delete heap[heap.length]
  heap.length = heap.length-1
  maxHeapify(heap, 0)
  return max;
}


function buildHeap(heap, i) {
  if (i == 0) return;
  let parent = Math.floor((i-1)/2);
  if (heap[parent][0][1] < heap[i][0][1]) {
    swapElements(heap, parent, i)
    buildHeap(heap, parent)
  }
}


function addToHeap(heap, e) {
  let size = heap.length;
    heap[size] = [e];
    buildHeap(heap, size);
}


function findKFrequent(arr,k) {
  let map = {};
  arr.forEach(e => {
    map[e] = map[e] ? map[e]+1 : 1
  });

  (Object.keys(map)).forEach(key => {
    console.log(`key = ${key}, freq = ${map[key]}`)
  })

  let heap = [];
  for(let [k,v] of Object.entries(map)) {
    let pair = [k,v]
    addToHeap(heap, pair);
  }

  let result = []
  for (let i = 0; i< k ; i++) {
    let he = extract(heap);
    result.push(he);
  }

  return result;
}


let result = findKFrequent(arr,3);
result.forEach(e => console.log(e))

