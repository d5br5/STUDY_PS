/** 3788 7498
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
var maxDepth = function (root) {
	if (root === null) return 0;
	let max = 0;

	function check(node, depth) {
		max = Math.max(max, depth);
		if (node?.left) check(node.left, depth + 1);
		if (node?.right) check(node.right, depth + 1);
	}

	check(root, 1);
	return max;
};
