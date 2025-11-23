// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}
const sum = (a,b)=>{
    return a + b
};

if (require.main === module) {
    console.log(sum(7,3))
    console.log("Hello World")
}

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

module.exports = { sum, fromEuroToDollar, oneEuroIs };
module.exports = { sum, fromEuroToYen, oneEuroIs };
module.exports = { sum, fromEuroToPound, oneEuroIs };

