"use strict";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    return 'Helo';
}
greet(undefined);
