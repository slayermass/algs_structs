const List = require('./index');

describe('--- List ---', () => {
  test('add + find', () => {
    const list = new List();

    for (let i = 0; i < 10_000; i++) {
      list.add(`elem=${i}`);
    }

    expect(list.find('elem=9999')).toEqual({value: 'elem=9999', next: null});
    expect(list.find('elem=0').value).toEqual('elem=0');
    expect(list.find('elem=-')).toEqual(undefined);
  });
});
