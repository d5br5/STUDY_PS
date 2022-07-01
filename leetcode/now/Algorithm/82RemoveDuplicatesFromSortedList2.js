function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/** 0621 1530/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
	if (!head || !head.next) return head;
	let a;
	let b;
	while (head.val === head.next.val) {
		a = head;
		while (a.next && a.next.val === a.val) {
			a = a.next;
		}
		head = a.next;
		if (!head || !head.next) {
			return head;
		}
	}

	a = head;

	while (a.next) {
		b = a.next;
		if (b.next && b.next.val === b.val) {
			while (b.next && b.next.val === b.val) {
				b = b.next;
			}
			a.next = b.next;
		} else {
			a = b;
		}
	}

	return head;
};

// 9056 4476 ver. dummy head

var deleteDuplicates = function (head) {
	if (!head || !head.next) return head;
	const dummyHead = new ListNode(head.val + 1, head);
	let a = dummyHead;
	let b;

	while (a.next) {
		b = a.next;
		if (b.next && b.next.val === b.val) {
			while (b.next && b.next.val === b.val) {
				b = b.next;
			}
			a.next = b.next;
		} else {
			a = b;
		}
	}

	return dummyHead.next;
};
