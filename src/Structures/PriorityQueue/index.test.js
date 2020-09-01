const PriorityQueue = require('./index');

describe('--- PriorityQueue ---', () => {
  test('insert at the middle', async () => {
    const model = new PriorityQueue([['f9', 9], ['f10', 10], ['f30', 30], ['f50', 50]]);
    const val = ['ins20', 20];

    model.enqueue(val);
    expect(model.size).toEqual(5);
    expect(model.getBy(2)).toEqual(val);

    const dequeued = model.dequeue();
    expect(dequeued).toEqual(['f9', 9]);
    expect(model.last()).toEqual(['f50', 50]);
  });

  test('insert at the end', async () => {
    const model = new PriorityQueue([['f9', 9], ['f10', 10], ['f30', 30], ['f50', 50]]);
    const val = ['ins200', 200];

    model.enqueue(val);
    expect(model.getBy(4)).toEqual(val);

    const dequeued = model.dequeue();
    expect(dequeued).toEqual(['f9', 9]);
    expect(model.last()).toEqual(val);
  });

  test('insert at the exist position', async () => {
    const model = new PriorityQueue([['f9', 9], ['f10', 10], ['f30', 30], ['f50', 50]]);
    const val = ['f10', 10];

    model.enqueue(val);
    expect(model.getBy(1)).toEqual(val);
    expect(model.getBy(2)).toEqual(val);
  });
});
