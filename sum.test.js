const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('converts 10 euros to dollars', () => {
    expect(fromEuroToDollar(10)).toBeCloseTo(10 * 1.07);
});

test('converts 10 dollars to yen', () => {
    expect(fromDollarToYen(10)).toBeCloseTo((10 / 1.07) * 156.5);
});


test('converts 1000 yen to pounds', () => {
    expect(fromYenToPound(1000)).toBeCloseTo((1000 / 156.5) * 0.87);
});