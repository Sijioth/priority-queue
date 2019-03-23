class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;// || this;
		this.left = null;
		this.right = null;
		// console.log(this);
	}

	appendChild(node) {
		// this.parent = this;//.parent.parent;
		// node.parent = this.parent;
		// this.parent.left.parent = this.parent;
		// this.parent.right.parent = this.parent;
		// console.log(this.parent.left);
		// console.log(this.parent.right);
		// console.log(this);
		// console.log(this.parent);
		// console.log("==============================");
		// if (this.parent === null) this.parent = node;
		if (this.right !== null) return;
		// console.log(node);
		if (this.left === null) {
			this.left = node;
			this.left.parent = this;
			// console.log(this.left.parent);
			return;
		}
		if (this.right === null) {
			this.right = node;
			this.right.parent = this;
			// console.log(this.right.parent);
			return;
		}

		// (this.left === null) ? this.left = node : this.right = node;
		// console.log(this.parent.left);
		// console.log(this.parent.right);
		// console.log(this);
		// console.log(this.parent);
		// console.log("++++++++++++++++++++++++++++++");
		// console.log(this.left.parent);
		// console.log(this.right.parent);
		// console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
	}

	removeChild(node) {
		// console.log(this.node.parent);

		// console.log(this.left);
		// console.log(this.right);
		// console.log(this.parent);
		if (this.left === node) {
			this.left = null;
			node.parent = null;
		// console.log(this.parent);
			return;
		}
		if (this.right === node) {
			this.right = null;
			node.parent = null;
		// console.log(this.parent);
			return;
		}
		
		// console.log(this.left);
		// console.log(this.right);
		// console.log(this.parent);
		if (node !== this.left && node !== this.right) {
			// console.log(node);
			// console.log(this.parent);
			// console.log(node.parent);
			throw Error;
		}
		// if (node === this.parent) {
		console.log(this.left.parent);
			this.left.parent = null;
		// console.log(this.parent);
			// return;
		// }
	}

	remove() {
		// console.log(parent);
		// console.log(left);
		// console.log(right);
		if (this.parent === null) {
			return;
		}
		
		// console.log(child);
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
		// console.log(this.parent.parent);

				this.parent.parent = this;
				this.parent = tempParentParent;
				tempParentParent.left = this;
				// console.log(this);
				if (tempLeft === this) {
					this.right = tempRight;
					tempParent.left = this.left;
					this.left = tempParent;
					// if (tempParentParent !== null) {
					// 	tempParentParent.left = tempLeft;
					// 	tempParentParent.right = tempLeft;
					// }
					} 
				if (tempRight === this) {
					tempParent.left.parent = this;
					// if (tempParentParent !== null) {
						// tempParentParent.right = tempRight;
					// }
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
					// if (tempParentParent !== null) {
					// 	tempParentParent.left = tempLeft;
					// 	tempParentParent.right = tempLeft;
					// }
					// console.log(this);
					} 
					if (tempRight === this) {
					tempParent.left.parent = this;
					// if (tempParentParent !== null) {
						// tempParentParent.right = tempRight;
					// }
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
		// this.parent.parent = this;
		// this.parent = tempParentParent;
		// if (tempLeft === this) {
		// // 	this.left = tempParent;
		// // 	this.right = tempRight;
		// // 	this.right.parent = ;
		// // tempParent.right.parent = this;
		// this.right = tempRight;
		// tempParent.left = this.left;
		// this.left = tempParent;
		// // if (tempParentParent !== null) {
		// // 	tempParentParent.left = tempLeft;
		// // 	tempParentParent.right = tempLeft;
		// // }
		// // console.log(this);
		// } 
		// if (tempRight === this) {
		// // 	this.right = tempParent;
		// // 	this.left = tempLeft;
		// // 	this.left.parent = this;
		// tempParent.left.parent = this;
		// // if (tempParentParent !== null) {
		// 	// tempParentParent.right = tempRight;
		// // }
		// }
		// console.log(tempParent.left);
		// console.log(this);
		// this.left = tempLeft;
		// this.left.parent = this;
		// this.right = tempRight;
		// console.log(this);
		// console.log(this.left.parent);
		// this.left.parent = this;
		// if (this.right.parent !== this)
		// if (this === tempRight)
		// this.parent.left = this.left;
		// this.parent.right = this.right;
		// this.left = tempLeft;
		// this.right = tempRight;
		// if (this.left !== null) {
		// 	this.left.parent = this;
		// }
	}
}

module.exports = Node;
