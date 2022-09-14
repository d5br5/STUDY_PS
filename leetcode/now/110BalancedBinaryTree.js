/** 1389 3814
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	if (root === null) return true;
	return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
		? isBalanced(root.left) && isBalanced(root.right)
		: false;
};

function getHeight(node, level = 0) {
	if (node === null) return level;
	return Math.max(getHeight(node.left, level + 1), getHeight(node.right, level + 1));
}
