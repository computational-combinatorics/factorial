import {TypeError, ValueError} from '@failure-abstraction/error';

import lookup from './lookup.js';

const N = lookup.length;

/**
 * Returns the factorial of the input number _n!_ = <code>1 * 2 * ... * n</code>.
 *
 * @experimental Uses doubles, will return incorrect values for large input.
 *
 * @param {number} n The input number.
 * @returns {number} The factorial of the input number.
 */
const factorial = (n) => {
	if (typeof n !== 'number') throw new TypeError();
	if (!Number.isInteger(n)) throw new ValueError();
	if (n < 0) throw new ValueError();
	if (n >= N) throw new ValueError();

	return lookup[n];
};

export default factorial;
