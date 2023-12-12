"use strict";
var _a, _b;
function fetch(url) {
    return {
        data: null,
        error: null,
    };
}
let user = fetch('url');
(_a = user.data) === null || _a === void 0 ? void 0 : _a.userName;
let product = fetch('url');
(_b = product.data) === null || _b === void 0 ? void 0 : _b.title;
