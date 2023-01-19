// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

function middleNode(head) {
  const middleNode = Math.floor(head.length / 2);
  return head.slice(middleNode);
}
const head1 = [1, 2, 3, 4, 5];
const head2 = [1, 2, 3, 4, 5, 6];
console.log(middleNode(head1));
