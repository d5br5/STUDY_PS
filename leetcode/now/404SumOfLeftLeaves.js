/** 6168 2464
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	let sum = 0;

	function check(node, isLeft) {
		if (!node.left && !node.right) {
			if (isLeft) sum += node.val;
		}
		if (node.left) check(node.left, true);
		if (node.right) check(node.right, false);
	}

	check(root, false);

	return sum;
};
