// * Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

//* 0504 7913

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const merged = new ListNode();
	let curr = merged;

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			curr.next = new ListNode(list1.val);
			curr = curr.next;
			if (list1.next) {
				list1 = list1.next;
			} else {
				list1 = null;
			}
		} else {
			curr.next = new ListNode(list2.val);
			curr = curr.next;
			if (list2.next) {
				list2 = list2.next;
			} else {
				list2 = null;
			}
		}
	}

	while (list1) {
		curr.next = new ListNode(list1.val);
		curr = curr.next;
		if (list1.next) {
			list1 = list1.next;
		} else {
			break;
		}
	}

	while (list2) {
		curr.next = new ListNode(list2.val);
		curr = curr.next;
		if (list2.next) {
			list2 = list2.next;
		} else {
			break;
		}
	}

	return merged.next;
}

// * 2808 2987
function mergeTwoLists2(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const merged = new ListNode();
	let curr = merged;

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			curr.next = new ListNode(list1.val);
			list1 = list1.next;
		} else {
			curr.next = new ListNode(list2.val);
			list2 = list2.next;
		}
		curr = curr.next;
	}

	curr.next = list1 || list2;
	return merged.next;
}

// * 1001 8433
function mergeTwoLists3(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (list1 === null) {
		return list2;
	} else if (list2 === null) {
		return list1;
	} else if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
}
