/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	let length = 1;
	let now = head;
	while (now.next) {
		now = now.next;
		length++;
	}
	let point = parseInt(length / 2);
	for (let i = 0; i < point; i++) {
		head = head.next;
	}
	return head;
};
