function printList(node) {
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
}

module.exports = { printList };
