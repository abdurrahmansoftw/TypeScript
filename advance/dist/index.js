"use strict";
function calculateTax(amount, taxYear) {
    if (taxYear < 2024)
        return amount * 0.05;
    else
        return amount * 0.1;
}
let taxValue = calculateTax(100, 12);
console.log(`2 args: ${taxValue}`);
