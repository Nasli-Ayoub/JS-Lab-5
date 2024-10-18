console.log("app.js is running");

import { add, subtract } from './mathModule.js';
import multiply from './mathModule.js';

import { toUpperCase } from './stringModule.js';

console.log('Add:', add(5, 3));
console.log('Subtract:', subtract(3, 1));
console.log('Uppercase:', toUpperCase('hello'));
console.log('Multiply:', multiply(4, 5));

import { findMax, reverseArray } from './arrayModule.js';
console.log('Max:', findMax([1, 2, 3, 4, 5]));
console.log('Reversed:', reverseArray([1, 2, 3]));

import { addAndLogUpper } from './mathModule.js';
addAndLogUpper(10, 20);

const maxValue = findMax([1, 2, 3, 4, 5]);
const product = multiply(maxValue, 10);
console.log(toUpperCase(product.toString()));