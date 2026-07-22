/**
 * value: any
 * next: item | null
 */
const item = (value, next = null) => ({
  value,
  next,
})

class List {
  constructor() {
    this.first = null;
  }

  // value: any -> item
  add(value) {
    if (this.first === null) {
      this.first = item(value);
    } else {
      let lastItem = this.first;

      while (lastItem.next !== null) {
        lastItem = lastItem.next;
      }

      lastItem.next = item(value);
    }
  }

  // value: any -> item
  find(value) {
    let lastItem = this.first;

    if (lastItem.value === value) {
      return lastItem
    } else {
      while (lastItem.next !== null) {
        lastItem = lastItem.next;

        if (lastItem.value === value) {
          return lastItem;
        }
      }

      return undefined
    }
  }
}

module.exports = List;
