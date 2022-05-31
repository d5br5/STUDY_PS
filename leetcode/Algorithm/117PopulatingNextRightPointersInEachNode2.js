/** 3110 2650
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	let stack1 = [root];
	let stack2 = [];

	while (stack1.length > 0) {
		for (let i = 0; i < stack1.length - 1; i++) {
			stack1[i].next = stack1[i + 1];
			if (stack1[i].left) stack2.push(stack1[i].left);
			if (stack1[i].right) stack2.push(stack1[i].right);
		}
		if (stack1[stack1.length - 1] && stack1[stack1.length - 1].left !== null)
			stack2.push(stack1[stack1.length - 1].left);
		if (stack1[stack1.length - 1] && stack1[stack1.length - 1].right !== null)
			stack2.push(stack1[stack1.length - 1].right);
		stack1 = [...stack2];
		stack2 = [];
	}
	return root;
};
