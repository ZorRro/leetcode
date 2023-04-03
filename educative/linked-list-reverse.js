function reverse(head) {

  if (!head.next)
  return head;  
  let prev = head, c = prev.next;
  prev.next = null
  while(c.next) {
      const next = c.next;
      c.next = prev;
      prev = c;
      c = next
  }
  c.next = prev;
  head = c;
  return head;
}