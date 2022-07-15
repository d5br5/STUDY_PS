// *  Definition for singly-linked list.
class ListNode206 {
	val: number;
	next: ListNode206 | null;
	constructor(val?: number, next?: ListNode206 | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// * 4524 9561
function reverseList(head: ListNode206 | null): ListNode206 | null {
	if (head === null) return null;
	let pre = new ListNode206(head.val);
	head = head.next;
	while (head) {
		let next = new ListNode206(head.val);
		next.next = pre;
		pre = next;
		head = head.next;
	}
	return pre;
}

// * 9256 2309
function reverseList2(head: ListNode206 | null): ListNode206 | null {
	if (head === null || head.next === null) return head;
	let next = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return next;
}
