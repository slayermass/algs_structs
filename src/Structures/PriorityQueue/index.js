const Queue = require('../Queue');

/**
 * Очередь с упорядочиванием
 * @see Queue
 * @extends Queue
 */
class PriorityQueue extends Queue {
  constructor(params) {
    super(params);
  }

  enqueue(val) {
    let isInserted = false

    // цикл for для возможности прекращения перебора при вставке
    for (let i = 0; i < this.arr.length; i++) {
      if (val[1] < this.arr[i][1]) {
        this.arr.splice(i, 0, val);
        isInserted = true;
        break;
      }
    }

    if (!isInserted) {
      this.arr.push(val);
    }

    return this.arr;
  }
}

module.exports = PriorityQueue;
