class MinStack {
  constructor() {
    this.stack = [];
    this.mins = [];
  }

  push(val) {
    this.stack.push(val);

    if (this.mins.length === 0) {
      this.mins.push(val);
    } else if (val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val);
    }
  }

  pop() {
    const last = this.stack.pop();

    if (last === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }

    return last;
  }

  getMin() {
    return this.mins[this.mins.length - 1];
  }
}

module.exports = MinStack
