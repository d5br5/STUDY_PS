/** 3633 4365
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	let now = head;
	let result = [];
	while (head) {
		result.push(head.val);
		head = head.next;
	}
	let len = result.length;
	for (let i = 0; i < Math.ceil(len / 2); i++) {
		if (result[i] !== result[result.length - 1 - i]) return false;
	}

	return true;
};
