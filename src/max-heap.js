const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		// insertNode(new Node(data, priority));
		// shiftNodeUp(new Node(data, priority));
	}

	pop() {
		// this.detachRoot();
		// restoreRootFromLastInsertedNode(this.root)
	}

	detachRoot() {
		// console.log(this.parentNodes);
		this.root = null;
		// this.parentNodes[0] = this.parentNodes[1];
		return this.root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		// console.log(this.parentNodes.length);
	}

	isEmpty() {
		// if (this.last === 0) {
		// 	return true;
		// }
		// return false;
		return this.parentNodes == [];
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		// if (MaxHeap.isEmpty) {
		// 	this.root = node;
		// }
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
