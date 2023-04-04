const MinStack = require('./index');

describe('--- MinStack ---', () => {
  test('repeated items', () => {
    const minStack = new MinStack();

    minStack.push(666);
    minStack.push(666);

    expect(minStack.getMin()).toBe(666);
    expect(minStack.pop()).toBe(666);
    expect(minStack.getMin()).toBe(666);
    expect(minStack.pop()).toBe(666);
  });

  test('sorted items', () => {
    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(-3);
    minStack.push(-5);
    minStack.push(-500);
    minStack.push(500);
    minStack.push(5);
    minStack.push(3);
    minStack.push(2);
    minStack.push(-800);

    expect(minStack.getMin()).toBe(-800);
    expect(minStack.pop()).toBe(-800);

    expect(minStack.getMin()).toBe(-500);
    expect(minStack.pop()).toBe(2);

    expect(minStack.getMin()).toBe(-500);
    expect(minStack.pop()).toBe(3);

    expect(minStack.getMin()).toBe(-500);
    expect(minStack.pop()).toBe(5);

    expect(minStack.getMin()).toBe(-500);
    expect(minStack.pop()).toBe(500);

    expect(minStack.getMin()).toBe(-500);
    expect(minStack.pop()).toBe(-500);

    expect(minStack.getMin()).toBe(-5);
    expect(minStack.pop()).toBe(-5);

    expect(minStack.getMin()).toBe(-3);
    expect(minStack.pop()).toBe(-3);

    expect(minStack.getMin()).toBe(-2);
    expect(minStack.pop()).toBe(-2);
  });
});
