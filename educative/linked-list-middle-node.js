let { LinkedListNode,
  LinkedList} = require('./utils/linked-list')

function middleNode (head) {
  if (head != null) {
    let s = head, f = head.next;
    while(f!=null) {
      s = s.next;
      f = f.next;
      if (f?.next) {
        f = f.next
      } else return s;
    }
    return s;
  } 
  return head;
}


let ll = new LinkedList();
ll.createLinkedList([1]);
console.log(middleNode(ll.head)?.data);