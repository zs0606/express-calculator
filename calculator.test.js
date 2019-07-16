const calculator = require('./calculator.helper.js');

test('the calculator addition function works as expected', () => {
    expect(calculator('addition', 1, 2)).toBe(3);
});

test('the calculator subtraction function works as expected', () => {
    expect(calculator('subtraction', 1, 2)).toBe(1);
});
