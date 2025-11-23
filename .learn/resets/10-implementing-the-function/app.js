const sum = (a,b)=>{
    return a + b
};

console.log(sum(7,3))

console.log("Hello World")

module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Euro → Dollar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

// Dollar → Yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

// Yen → Pound
function fromYenToPound(yens) {
    let euros = yens / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}