class Node {
  constructor() {
    let data;
    let next;
    let flag;
  }
}
function push(head_ref, new_data) {
  let new_node = new Node();
  new_node.data = new_data;
  new_node.flag = 0;
  new_node.next = head_ref;
  head_ref = new_node;
  return head_ref;
}

function detectLoop(head) {
  while (head != null) {
    if (head.flag == 1) {
      console.log("Loop Found");
      return;
    }
    head.flag = 1;
    head = head.next;
  }
  console.log("No Loop Found");
  return;
}

let head = null;
head = push(head, 20);
head = push(head, 4);
head = push(head, 15);
head = push(head, 10);

//To create a loop
//Comment this line for testing other case as well
head.next.next.next.next = head;

detectLoop(head);
