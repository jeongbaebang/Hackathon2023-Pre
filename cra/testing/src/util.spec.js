function add(a, b) {
  return a + b;
}

test('should first', () => {
  expect(add(1, 2)).toEqual(3);
});
