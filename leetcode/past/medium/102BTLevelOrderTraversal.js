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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let result = [];
	deep(root, 0);
	return result;

	function deep(node, count) {
		if (node === null) return;
		if (!result[count]) result.push([]);
		if (node?.val || node?.val === 0) result[count].push(node.val);
		if (node?.left) deep(node.left, count + 1);
		if (node?.right) deep(node.right, count + 1);
	}
};
