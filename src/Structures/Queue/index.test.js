const Queue = require('./index');

describe('--- Queue ---', () => {
  test('enqueue-dequeue-size-getBy', async () => {
    const model = new Queue();

    expect(model.size).toBe(0);

    model.enqueue('val');
    model.enqueue('666');
    expect(model.size).toBe(2);
    expect(model.getBy(1)).toBe('666');

    const dequeued = model.dequeue();
    expect(dequeued).toBe('val');
  });

  test('dequeue empty', async () => {
    const model = new Queue();
    expect(model.dequeue()).toBe(undefined);
  });

  test('last-first empty', async () => {
    const model = new Queue();
    expect(model.first()).toBe(undefined);
    expect(model.last()).toBe(undefined);
  });

  test('first-last', async () => {
    const model = new Queue();

    model.enqueue('val');
    model.enqueue('666');
    model.enqueue(666);

    const first = model.first();
    expect(first).toBe('val');

    const last = model.last();
    expect(last).toBe(666);
  });

  test('isEmpty', async () => {
    const model = new Queue();

    expect(model.isEmpty).toBe(true);

    model.enqueue('val');

    expect(model.isEmpty).toBe(false);
  });

  test('clear', async () => {
    const model = new Queue();

    model.enqueue('val');

    expect(model.size).toBe(1);
    expect(model.last()).toBe('val');

    model.clear();
    expect(model.size).toBe(0);
    expect(model.last()).toBe(undefined);
  });
});
