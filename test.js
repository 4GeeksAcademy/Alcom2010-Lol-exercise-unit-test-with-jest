const { sum } = require("./app.js");



test ("adds 14 + 9 to equal 23", () =>{

    let total = sum(14, 9);



    expect(total).toBe(23)

})


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}