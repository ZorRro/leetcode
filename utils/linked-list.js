
// Template for linked list node class
class LinkedListNode {
  constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }
}



// Template for the linked list
class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            console.log(result);
        };
    }
}



// Template for traversing a linked list

function traverseLinkedList(head) {
  let current = head,
      nxt = null;

  while (current != null) {
      nxt = current.next;
      console.log(`${current.data}, `);
      current = nxt;
  }
}



// Template for reversing a linked list
function reverseLinkedList(head) {
    let prev = null,
        curr = head;

    while (curr != null) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}

function reverseTillNode(head, end) {
    let prev = null,
        curr = head;

    while (curr != end) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}



module.exports = {
  LinkedListNode,
  LinkedList,
  reverseLinkedList,
  traverseLinkedList,
  reverseTillNode,
}