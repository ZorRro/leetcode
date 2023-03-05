let { LinkedListNode,
  LinkedList} = require('./utils/linked-list')


function isCyclicLinkedList(head) {
  if (head!= null) {
    let s = head, f = head.next;
    while (1) {
      if (s == f) return true;
      s = s.next;
      f = f?.next;
      if (f?.next) {
        f = f.next
      } else return false;
    }
  }
  return false;
}

let ll = new LinkedList();
ll.createLinkedList([4,3,2,1]);
ll.display();