/** 9841 2094
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	if (root === null) return [];
	let result = [root.val];
	for (let child of root.children) {
		result.push(...preorder(child));
	}
	return result;
};
