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
var oddEvenList = function (head) {
	if (head === null) return head;

	let firsthead = head;
	let secondhead = head.next;

	if (secondhead === null) return head;

	let firstpointer = firsthead;
	let secondpointer = secondhead;
	let totalpointer = firsthead;

	let count = 0;

	while (totalpointer.next !== null) {
		if (count % 2 === 0) {
			if (secondpointer.next !== null) {
				firstpointer.next = secondpointer.next;
				firstpointer = firstpointer.next;
			} else {
				break;
			}
		} else {
			if (firstpointer.next !== null) {
				secondpointer.next = firstpointer.next;
				secondpointer = secondpointer.next;
			} else {
				break;
			}
		}
		count++;
		totalpointer = totalpointer.next;
	}

	if (count % 2 === 0) {
		firstpointer.next = null;
	} else {
		secondpointer.next = null;
	}

	firstpointer.next = secondhead;
	return firsthead;
};
