/** 2976 2865
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
var sortList = function (head) {
	if (head === null || head.next === null) return head;

	let mid = getMid(head);
	let left = sortList(head);
	let right = sortList(mid);
	return merge(left, right);
};

function getMid(head) {
	let mid = null;
	while (head !== null && head.next !== null) {
		mid = mid === null ? head : mid.next;
		head = head.next.next;
	}
	let result = mid.next;
	mid.next = null;
	return result;
}

function merge(list1, list2) {
	if (list1 === null) return list2;
	if (list2 === null) return list1;
	if (list1.val < list2.val) {
		list1.next = merge(list1.next, list2);
		return list1;
	}
	list2.next = merge(list1, list2.next);
	return list2;
}
