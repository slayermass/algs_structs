/**
 * Хеш-таблица
 * имеет следующие методы:
 *
 *    add - добавить пару ключ/значение
 *    remove - удалить пару
 *    get - найти значение по ключу
 */
class HashTable {
  constructor() {
    this.storage = {}; // {}?
  }

  // простое хэширование для примера
  _hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
    }
    return hash & hash; // 32bit integer
  }

  set(key, value) {
    const index = this._hash(key);

    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  isKeyExists(key) {
    const index = this._hash(key);
    const val = this.storage[index];
    return !!(val && Array.isArray(val));
  }

  remove(key) {
    const index = this._hash(key);
    const val = this.storage[index];

    if (!this.isKeyExists(key)) {
      return false;
    }

    if (val.length === 1 && val[0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < val; i++) {
        if (val[i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  get(key) {
    const index = this._hash(key);
    const val = this.storage[index];

    if (!this.isKeyExists(key)) {
      return undefined;
    } else {
      for (let i = 0; i < val.length; i++) {
        if (val[i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  display() {
    return this.storage;
  }
}

module.exports = HashTable;
