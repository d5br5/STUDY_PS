/** 9301 5178
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
	if (head === null || head.next === null) return head;
	let oddHead = new ListNode(head.val);
	let odd = oddHead;
	let evenHead = new ListNode(head.next.val);
	let even = evenHead;
	head = head.next.next;
	let index = 0;
	while (head) {
		if (index % 2 === 0) {
			odd.next = new ListNode(head.val);
			odd = odd.next;
		} else {
			even.next = new ListNode(head.val);
			even = even.next;
		}
		head = head.next;
		index++;
	}

	odd.next = evenHead;
	return oddHead;
};

/** 3424 9807
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
	if (head === null || head.next === null) return head;
	let odd = head,
		even = head.next,
		evenHead = even;
	while (even !== null && even.next !== null) {
		odd.next = even.next;
		odd = odd.next;
		even.next = odd.next;
		even = even.next;
	}
	odd.next = evenHead;
	return head;
};
