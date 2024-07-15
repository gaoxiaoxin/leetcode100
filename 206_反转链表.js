/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let pre = null;
  let cur = head;
  while (cur) {
    let next = head.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
