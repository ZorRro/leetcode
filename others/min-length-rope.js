const { addToMinHeap, extractFromMinHeap }= require('../utils/heap')

/**
 * The Objective is to find min cost rope.
 * cost of joinining 2 ropes is the length of the ropes.
 * Ex : 2,5,4,6
 * join1 = 2 + 4 = 6    Ropes (5,6,6)
 * join2 = 5 + 6 = 11   Ropes (11,6)
 * join3 = 11 + 6 = 17  Ropes (17)
 * total cost = 6 + 11 + 17  = 34
*/

// const ropes = [2,6,4,5]
const ropes = [4,3,2,6]

const findMinLengthRope = (ropes) => {
  if (ropes.length < 2) return ropes.length ? null: ropes[0];
  let heap = [];
  ropes.forEach(rope => {
    addToMinHeap(heap, rope)
  })
  console.log('Heap is : ')
  heap.forEach(e => console.log(e))


  let cost = 0;
  while(heap.length > 1) {
    let rope1 = extractFromMinHeap(heap);
    let rope2 = extractFromMinHeap(heap);
    let currentCost = rope1 + rope2
    cost += currentCost;
    addToMinHeap(heap, currentCost);
  }
  return cost;
}

console.log(findMinLengthRope(ropes))