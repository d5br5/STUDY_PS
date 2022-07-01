/** 6903 8100
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
	let count = 1;
	let now = head;
	while (now.next) {
		count++;
		now = now.next;
	}
	now = head;
	for (let i = 0; i < parseInt(count / 2); i++) {
		now = now.next;
	}
	return now;
};

/** 6272 3897
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
	let A = [head];
	while (A[A.length - 1].next !== null) {
		A.push(A[A.length - 1].next);
	}
	return A[parseInt(A.length / 2)];
};

/** 7962 3897
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
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	return slow;
};
