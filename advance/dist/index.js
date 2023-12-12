"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Amount should be greater than 0');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('value should be greater than 0');
        this._balance = value;
    }
}
let account = new Account(1, 'akaid', 0);
console.log(account.balance);
account.balance = 100;
