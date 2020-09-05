const isEmptyValue = require('./index');

describe('--- isEmptyValue ---', () => {
  test('true tests', () => {
    expect(isEmptyValue(null)).toBe(true);
    expect(isEmptyValue('')).toBe(true);
    expect(isEmptyValue(false)).toBe(true);
    expect(isEmptyValue([])).toBe(true);
    expect(isEmptyValue({})).toBe(true);
    expect(isEmptyValue(new Set([]))).toBe(true);
    expect(isEmptyValue(new Map([]))).toBe(true);
    expect(isEmptyValue(new Error())).toBe(true);
  });

  test('false tests', () => {
    expect(isEmptyValue(true)).toBe(false);
    expect(isEmptyValue('2')).toBe(false);
    expect(isEmptyValue(0)).toBe(false);
    expect(isEmptyValue(1e10)).toBe(false);
    expect(isEmptyValue([1, 2, 3])).toBe(false);
    expect(isEmptyValue({ 'a': 1 })).toBe(false);
    expect(isEmptyValue(new Set([1]))).toBe(false);
    expect(isEmptyValue(new Map([[1, 'val']]))).toBe(false);
    expect(isEmptyValue(Symbol('v'))).toBe(false);
    expect(isEmptyValue(new Date())).toBe(false);
    expect(isEmptyValue(new Error('message'))).toBe(false);
  });

  test('prop tests', () => {
    const obj = {'prop': 'mine'};
    const obj2 = Object.assign({}, obj);

    expect(isEmptyValue(obj2)).toBe(false);


    const Parent = {
      name: 'Anonymous',
      greet: () => {}
    }

    const Child = Object.create(Parent);
    const ChildWithName = Object.create(Parent);
    ChildWithName.name = 'JACK';

    expect(isEmptyValue(Child)).toBe(true);
    expect(isEmptyValue(ChildWithName)).toBe(false);
  });
});
