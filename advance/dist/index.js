"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'string') {
        weight = parseFloat(weight);
    }
    return weight / 2.2;
}
kgToLbs(100);
kgToLbs('100');
