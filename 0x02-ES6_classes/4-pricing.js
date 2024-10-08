/*
 * imports class Currency from 3-currency.js
 * implements class Pricing
 * Constructor attributes: amount(Number), currency (Currency) stored in underscore attributes
 * implements a getter and setter for each attribute.
 * implements a method 'displayFullPrice' which returns 'amount currency_name (currency_code)'
 * implements a static method 'convertPrice'.
 * Static method accepts arguments: amount(Number), conversionRate(Number).
 * Static method returns the amount multiplied by the conversion rate.
 */

import Currency from './3-currency';

export default class Pricing {
/* eslint-disable no-underscore-dangle */

  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // gets the amount of pricing
  get amount() {
    return this._amount;
  }

  // sets the amount of pricing
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  // gets the currency for pricing.
  get currency() {
    return this._currency;
  }

  // sets the currency for pricing.
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  // method returns a display of full price.
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method converts price basing on a conversion rate.
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate mjust be a number');
    }
    return amount * conversionRate;
  }
}
