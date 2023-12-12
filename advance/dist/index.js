'use strict';
class Account {
  constructor(id, owner, banalce) {
    this.id = id;
    this.owner = owner;
    this.banalce = banalce;
  }
  deposit(amount) {
    if (amount > 0) throw new Error('Amount should be greater than 0');
    this.banalce += amount;
  }
}
