/** 7648 8046
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	let answer = 0;
	let q = [root];
	while (q.length > 0) {
		let now = q.shift();
		if (now.left) q.push(now.left);
		if (now.right) q.push(now.right);
		if (now.val >= low && now.val <= high) answer += now.val;
	}
	return answer;
};

/** 4572 3896
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	if (!root) return 0;
	let val = root.val <= high && root.val >= low ? root.val : 0;
	return val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
