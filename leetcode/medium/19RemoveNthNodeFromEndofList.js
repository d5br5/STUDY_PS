/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let now = head;
	let length = 1;
	while (now.next) {
		now = now.next;
		length++;
	}
	now = head;
	for (let i = 1; i < length - n; i++) {
		now = now.next;
	}
	if (length === 1) {
		head = null;
	} else if (length - n === 0) {
		head = head.next;
	} else {
		if (n !== 1) {
			now.next = now.next.next;
		} else {
			now.next = null;
		}
	}
	return head;
};
