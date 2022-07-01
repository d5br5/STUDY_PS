now;
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	let result = [];
	travel(root);
	return result[k - 1];

	function travel(now) {
		if (now.left) travel(now.left);
		result.push(now.val);
		if (now.right) travel(now.right);
	}
};
