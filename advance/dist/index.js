"use strict";
function getCustumor(customerId) {
    return customerId === 0 ? null : { birthday: new Date() };
}
let customar = getCustumor(1);
console.log(customar === null || customar === void 0 ? void 0 : customar.birthday);
