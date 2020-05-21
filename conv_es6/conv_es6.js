// const baseCurrencyUs = 27.4756;

// //helper
// function roundTwoDecimals(amount) {
//     return Math.round(amount * 100)/100  //округляем до сотых
// }

// module.exports.convertToUa = function (currency) {
//     return roundTwoDecimals(currency * baseCurrencyUs);
// }

// module.exports.convertToUs = function (currency) {
//     return roundTwoDecimals(currency / baseCurrencyUs);
// }

class Converter {
    constructor(baseCurrencyUs) {
        this.baseCurrencyUs = baseCurrencyUs
    }
    roundTwoDecimals(amount) {
         return Math.round(amount * 100)/100
    }
    convertToUa = function (currency) {
         return this.roundTwoDecimals(currency * this.baseCurrencyUs)
    }
    convertToUs = function (currency) {
        return this.roundTwoDecimals(currency / this.baseCurrencyUs)
    }
}

module.exports = Converter