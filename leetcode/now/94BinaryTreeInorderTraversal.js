/** 7835 2238
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let result = [];
	if (!root) return [];
	if (root.left) result.push(...inorderTraversal(root.left));
	if (root.val || root.val === 0) result.push(root.val);
	if (root.right) result.push(...inorderTraversal(root.right));
	return result;
};
