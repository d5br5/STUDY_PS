function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/** 6516 3464
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
	if ((root && !subRoot) || (!root && subRoot)) return false;
	if (!root && !subRoot) return true;
	if (root.val === subRoot.val) {
		return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
	}
	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSame(root, subRoot) {
	if ((root && !subRoot) || (!root && subRoot)) return false;
	if (!root && !subRoot) return true;
	return root.val === subRoot.val
		? isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right)
		: false;
}

// 6516 6821

var isSubtree = function (root, subRoot) {
	if ((root && !subRoot) || (!root && subRoot)) return false;
	if (!root && !subRoot) return true;
	if (root.val === subRoot.val && isSame(root, subRoot)) return true;
	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSame(root, subRoot) {
	if ((root && !subRoot) || (!root && subRoot)) return false;
	if (!root && !subRoot) return true;
	return root.val === subRoot.val
		? isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right)
		: false;
}

// 0509 9903

var isSubtree = function (root, subRoot) {
	if (!root && !subRoot) return true;
	if (!root || !subRoot) return false;
	return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSame(root, subRoot) {
	if (!root && !subRoot) return true;
	if (!root || !subRoot) return false;
	return (
		root.val === subRoot.val && isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right)
	);
}

// 0509 9420
var isSubtree = function (root, subRoot) {
	if (!root) return false;
	return (
		JSON.stringify(root) === JSON.stringify(subRoot) ||
		isSubtree(root.left, subRoot) ||
		isSubtree(root.right, subRoot)
	);
};
