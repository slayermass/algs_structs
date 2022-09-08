const HashTable = require('./index');

describe('--- HashTable ---', () => {
  let model;

  beforeEach(() => {
    model = new HashTable();
  });

  test('multiple add at one position', async () => {
    const dateValue = new Date();

    /** hash is 507 */
    model.set("France", 'model_value');
    model.set("Spain", 'model_value 2');
    model.set("Sapin", 5555);
    model.set("ǻ", dateValue);

    expect(model.display()).toEqual({
      '507': [['Spain', 'model_value 2'], ['Sapin', 5555], ['ǻ', dateValue]],
      '591': [['France', 'model_value']]
    });
  });

  test('add remove multiple', async () => {
    ['model_value', 'model_value 2', 5555, new Date()].forEach((item) => {
      model.set('model_key', item);
      expect(model.get('model_key')).toBe(item);
    });

    model.remove('model_key');
    expect(model.get('model_key')).toBe(undefined);
  });

  test('add remove multiple array', async () => {
    const arrValue = ['model_value', 'model_value 2', 5555, new Date()];

    model.set('model_key', arrValue);
    expect(model.get('model_key')).toBe(arrValue);

    model.remove('model_key');
    expect(model.get('model_key')).toBe(undefined);
  });

  test('multiple value key', () => {
    model.set('model_key', 'model_value');
    model.set('model_key', 'model_value_MORE');

    // перезапись того же ключа
    expect(model.get('model_key')).toBe('model_value_MORE');
  });

  test('multiple value the same hash key', () => {
    // разные значения, но один хэш
    model.set(555, 'model_value');
    model.set('', 'model_value_MORE');

    expect(model.storage['0'].length).toBe(2);
    expect(model.get(555)).toBe('model_value');
    expect(model.get('')).toBe('model_value_MORE');
  });

  test('key doesn\'t exists', () => {
    expect(model.remove('model_key')).toBe(false);
  });
});
