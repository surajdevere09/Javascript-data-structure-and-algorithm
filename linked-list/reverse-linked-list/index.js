class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// three pointer technique

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function main() {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);

  const output = reverseLinkedList(head);
  console.log(output);
}

main();
