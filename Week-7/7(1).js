const { printList } = require("./globalFuncs");

var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverse(node) {
  var prev = null;
  var current = node;
  var next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

function push(new_data) {
  var new_node = new Node();
  new_node.data = new_data;
  new_node.next = head;
  head = new_node;
}

push(4);
push(3);
push(2);
push(1);
console.log("Before Reversing");
printList(head);
head = reverse(head);
console.log("After Reversing");
printList(head);
