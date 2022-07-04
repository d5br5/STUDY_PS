/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let result = new ListNode();
	let now = result;

	let sum = l1.val + l2.val;
	let ten = parseInt(sum / 10);
	let one = sum % 10;

	now.val = one;

	while (l1.next && l2.next) {
		l1 = l1.next;
		l2 = l2.next;
		sum = l1.val + l2.val + ten;
		ten = parseInt(sum / 10);
		one = sum % 10;
		let next = new ListNode(one);
		now.next = next;
		now = next;
	}

	if (l1.next) {
		while (l1.next) {
			l1 = l1.next;
			sum = l1.val + ten;
			ten = parseInt(sum / 10);
			one = sum % 10;
			let next = new ListNode(one);
			now.next = next;
			now = next;
		}
	} else {
		while (l2.next) {
			l2 = l2.next;
			sum = l2.val + ten;
			ten = parseInt(sum / 10);
			one = sum % 10;
			let next = new ListNode(one);
			now.next = next;
			now = next;
		}
	}
	if (ten !== 0) {
		now.next = new ListNode(ten);
	}

	return result;
};
