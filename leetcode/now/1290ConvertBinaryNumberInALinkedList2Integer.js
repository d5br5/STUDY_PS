/** 6839 1600
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
	let num = 0;

	while (head.next) {
		num *= 2;
		num += head.val;
		head = head.next;
	}
	return num * 2 + head.val;
};

/** 6297 9207
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
	let num = head.val;

	while (head.next) {
		num = (num << 1) | head.next.val;
		head = head.next;
	}
	return num;
};
