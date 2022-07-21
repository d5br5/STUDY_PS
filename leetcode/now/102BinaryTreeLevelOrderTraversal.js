/** 3667 4384
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
	if (root === null) return [];
	let Queue = [root];
	let result = [];
	while (Queue.length > 0) {
		let now = [];
		let tmp = [];
		for (let q of Queue) {
			now.push(q.val);
			if (q.left) tmp.push(q.left);
			if (q.right) tmp.push(q.right);
		}
		result.push(now);
		Queue = tmp;
	}
	return result;
};
