// Definition for Node.

class PNode {
	val: number;
	left: PNode | null;
	right: PNode | null;
	next: PNode | null;
	constructor(val?: number, left?: PNode, right?: PNode, next?: PNode) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
		this.next = next === undefined ? null : next;
	}
}

//  4753 1863

function connect(root: PNode | null): PNode | null {
	if (root === null) return null;

	let stack1 = [root];
	let stack2 = [];

	while (stack1[0].left !== null) {
		for (let i = 0; i < stack1.length; i++) {
			stack2.push(stack1[i].left);
			stack2.push(stack1[i].right);
		}
		for (let i = 0; i < stack2.length - 1; i++) {
			stack2[i].next = stack2[i + 1];
		}
		stack1 = [...stack2];
		stack2 = [];
	}

	return root;
}

// 5817 3194

function connect2(root: PNode | null): PNode | null {
	if (root === null) return null;
	let Q = [root];
	while (Q.length > 0) {
		let size = Q.length;
		for (let i = 0; i < size - 1; i++) {
			Q[i].next = Q[i + 1];
		}
		for (let i = 0; i < size; i++) {
			let now = Q.shift();
			if (now.left !== null) Q.push(now.left, now.right);
		}
	}

	return root;
}
