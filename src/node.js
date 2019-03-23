class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.right !== null) {
			return;
		}
		if (this.left === null) {
			this.left = node;
			this.left.parent = this;
			return;
		}
		if (this.right === null) {
			this.right = node;
			this.right.parent = this;
			return;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
			return;
		}
		if (this.right === node) {
			this.right = null;
			node.parent = null;
			return;
		}
		if (node !== this.left && node !== this.right) {
			throw Error;
		}
	}

	remove() {
		if (this.parent === null) {
			return;
		}
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent === null) {
			return;
		}
		let tempParentParent = this.parent.parent;
		let tempParent = this.parent;
		let tempLeft = this.parent.left;
		let tempRight = this.parent.right;

		if (this.parent.parent !== null) {
			if (this.parent === tempParentParent.left) {
				this.parent.parent = this;
				this.parent = tempParentParent;
				tempParentParent.left = this;
				if (tempLeft === this) {
					this.right = tempRight;
					tempParent.left = this.left;
					this.left = tempParent;
					} 
				if (tempRight === this) {
					tempParent.left.parent = this;
					}
			}
			if (this.parent === tempParentParent.right) {
				this.parent.parent = this;
				this.parent = tempParentParent;
				tempParentParent.right = this;
				if (tempLeft === this) {
					this.right = tempRight;
					tempParent.left = this.left;
					this.left = tempParent;
				} 
				if (tempRight === this) {
					tempParent.left.parent = this;
				}
			}
		} else {
			this.parent.parent = this;
			this.parent = tempParentParent;
			if (tempLeft === this) {
				this.right = tempRight;
				tempParent.left = this.left;
				this.left = tempParent;
			} 
			if (tempRight === this) {
				tempParent.left.parent = this;
			}
		}
	}
}

module.exports = Node;
