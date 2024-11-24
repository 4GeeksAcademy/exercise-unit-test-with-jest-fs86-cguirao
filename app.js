const oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,
    "GBP": 0.87, 
};

const sum = (a, b) => {
    return a + b;
};

const fromDollarToYen = (dollar) => {
    const euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
};

const fromEuroToDollar = function(euro) {
    return euro * oneEuroIs.USD;
};

const fromYenToPound = (yen) => {
    const euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};


module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};