//  Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// trash

function mergeTreesTrash(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
	const SumTree = new TreeNode();

	DFS(root1, root2, SumTree);

	function DFS(r1, r2, s) {
		if (r1 === null && r2 === null) return;
		s.val = 0;
		if (r1 !== null) s.val += r1.val;
		if (r2 !== null) s.val += r2.val;
		if ((r1 !== null && r1.left !== null) || (r2 !== null && r2.left !== null)) {
			let newS = new TreeNode();
			s.left = newS;
			DFS(r1.left, r2.left, newS);
		}
		if ((r1 !== null && r1.right !== null) || (r2 !== null && r2.right !== null)) {
			let newS = new TreeNode();
			s.right = newS;
			DFS(r1.right, r2.right, newS);
		}
	}

	return SumTree;
}

// 8043 8596

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
	if (root1 === null && root2 === null) return null;

	const SumTree = new TreeNode();

	if (root1 === null) {
		singleDFS(root2, SumTree);
	} else if (root2 === null) {
		singleDFS(root1, SumTree);
	} else {
		DFS(root1, root2, SumTree);
	}

	function DFS(r1, r2, s) {
		s.val = r1.val + r2.val;
		if (r1.left !== null || r2.left !== null) {
			let newSL = new TreeNode();
			s.left = newSL;
			if (r1.left === null) {
				singleDFS(r2.left, s.left);
			} else if (r2.left === null) {
				singleDFS(r1.left, s.left);
			} else {
				DFS(r1.left, r2.left, s.left);
			}
		}

		if (r1.right !== null || r2.right !== null) {
			let newSR = new TreeNode();
			s.right = newSR;
			if (r1.right === null) {
				singleDFS(r2.right, s.right);
			} else if (r2.right === null) {
				singleDFS(r1.right, s.right);
			} else {
				DFS(r1.right, r2.right, s.right);
			}
		}
	}
	function singleDFS(r, s) {
		s.val = r.val;
		if (r.left !== null) {
			let newS = new TreeNode();
			s.left = newS;
			singleDFS(r.left, s.left);
		}
		if (r.right !== null) {
			let newS = new TreeNode();
			s.right = newS;
			singleDFS(r.right, s.right);
		}
	}

	return SumTree;
}

// best 1660 6340

function mergeTreesBest(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
	if (root1 === null) return root2;
	if (root2 === null) return root1;
	root1.val += root2.val;
	root1.right = mergeTrees(root1.right, root2.right);
	root1.left = mergeTrees(root1.left, root2.left);
	return root1;
}
