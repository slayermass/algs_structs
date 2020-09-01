const HashTable = require('./index');

describe('--- HashTable ---', () => {
  test('base', async () => {
    const model = new HashTable();

    model.add('model_key', 'model_value');

    model.remove('model_key');

    expect(model.lookup('model_key')).toBe(undefined);
  });

  test('multiple value key', async () => {
    const model = new HashTable();

    model.add('model_key', 'model_value');
    model.add('model_key', 'model_value_MORE');

    // перезапись того же ключа
    expect(model.lookup('model_key')).toBe('model_value_MORE');
  });

  test('multiple value the same hash key', async () => {
    const model = new HashTable();

    // разные значения, но один хэш
    model.add(555, 'model_value');
    model.add('', 'model_value_MORE');

    expect(model.storage['0'].length).toBe(2);
    expect(model.lookup(555)).toBe('model_value');
    expect(model.lookup('')).toBe('model_value_MORE');
  });

  test('key doesn\'t exists', async () => {
    const model = new HashTable();

    expect(model.remove('model_key')).toBe(false);
  });
});
