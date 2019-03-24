const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
		// console.log(this.parentNodes);
	}

	push(data, priority) {
		const newNode = new Node(data, priority);
		// newNode.
		this.insertNode(newNode);
		// this.insertNode(new Node (data, priority));
		this.length++;
		this.shiftNodeUp(newNode);
		// this.shiftNodeUp(new Node (data, priority));

	}

	pop() {
		// this.detachRoot();
		this.length--;
		// restoreRootFromLastInsertedNode(this.root);
		// return this.root.Node.data;
	}

	detachRoot() {
		let detached = this.root;
		this.root = null;
		// if (this.parentNodes[0] === detached) this.parentNodes.shift();
		// length--;
		if (this.parentNodes.indexOf(this.root) !== -1)	this.parentNodes.splice(this.parentNodes.indexOf(detached), 1);
		// if (this.parentNodes.indexOf(detached) !== -1)	this.parentNodes.splice(this.parentNodes.indexOf(detached), 1);
		// console.log(this.parentNodes.indexOf(detached));
		return detached;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		// console.log(this.length);
		return this.length;
	}

	isEmpty() {
		// if (this.last === 0) {
		// 	return true;
		// }
		// return false;
		// console.log(this.length);
		return this.length === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			this.parentNodes.push(node);
			// length++;
		} else if (this.parentNodes[0].left == null) {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			// length++;
		} else if (this.parentNodes[0].right == null) {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			this.parentNodes.shift();
			// this.detachRoot();
		}
		// length++;
		//else {
			// this.parentNodes[0].
			// this.parentNodes[0].appendChild(node);
			// this.parentNodes.push(node);
			
			// this.root.appendChild(node);
			
		// }
		// console.log(this.parentNodes);
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
