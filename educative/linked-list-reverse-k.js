const util = require('./utils/linked-list')

function reverseLinkedListK(head, k) {
  if (!head || !head.next) return head;
  let c = head;
  let t = k-1
  while ( t >= 0 ) {
    if (c == null) return head;
    console.log(c?.data ?? 'null')
    c = c.next
    t--;
  }
  let e = c;
  let newHead = util.reverseTillNode(head,e);
  head.next = reverseLinkedListK(e, k)
  return newHead;
}

const LL = new util.LinkedList()
LL.createLinkedList([1,2,3,4,5,6,7,8,9,10]);
LL.display()
let result = reverseLinkedListK(LL.head,4);
util.traverseLinkedList(result);

let reversed = util.reverseLinkedList(LL.head)
util.traverseLinkedList(reversed);
