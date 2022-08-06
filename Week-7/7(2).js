const { printList } = require("./globalFuncs");

var head = null;
class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function rotate(k) {
  if (k == 0) return;
  var current = head;
  while (current.next != null) {
    current = current.next;
  }
  current.next = head;
  current = head;

  for (i = 0; i < k - 1; i++) {
    current = current.next;
  }
  head = current.next;
  current.next = null;
}

function push(new_data) {
  var new_node = new Node();
  new_node.data = new_data;
  new_node.next = head;
  head = new_node;
}

for (i = 60; i > 0; i -= 10) {
  push(i);
}
console.log("Before rotating");
printList(head);
rotate(3);
console.log("After rotating");
printList(head);
