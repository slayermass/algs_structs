/**
 * Очередь (FIFO) (первым вошел, первым вышел)
 * имеет следующие методы:
 *
 *    enqueue - войти в очередь, добавить элемент в конец
 *    dequeue - покинуть очередь, удалить первый элемент и вернуть его
 *    first - получить первый элемент
 *    last - получить последний элемент
 *    isEmpty - проверить, пуста ли очередь
 *    size - получить количество элементов в очереди
 *    clear - полная очистка
 *
 *    getBy - получить по индексу
 */
class Queue {
  constructor(params) {
    this.arr = Array.isArray(params) ? params : [];
  }

  enqueue(val) {
    this.arr.push(val);
  }

  dequeue() {
    return this.arr.shift();
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length - 1];
  }

  get isEmpty() {
    return this.arr.length === 0;
  }

  get size() {
    return this.arr.length;
  }

  clear() {
    this.arr = [];
  }

  getBy(index) {
    return this.arr[index];
  }
}

module.exports = Queue;
