import {TypeError, ValueError} from '@failure-abstraction/error';

import _factorialn from './_factorialn.js';

/**
 * Factorialn.
 *
 * @param {bigint} n
 */
const factorialn = (n) => {
	if (typeof n !== 'bigint') throw new TypeError();
	if (n < 0n) throw new ValueError();

	return _factorialn(n);
};

export default factorialn;
