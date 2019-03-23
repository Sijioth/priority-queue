const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		this.heap.push(data, priority);
		// if (this.size == maxSize) {
		// 	throw Error;
		// }
	}

	shift() {
	}

	size() {
		
	}

	isEmpty() {
		if (this.size > 0) {
			return true;
		}
		return false;
	}
}

module.exports = PriorityQueue;
