import assert from 'assert';

/**
 * Returns the factorial of the input bigint _n!_ = <code>1 * 2 * ... * n</code>.
 *
 * @param {bigint} n The input bigint.
 * @returns {bigint} The factorial of the input bigint.
 */
const _factorialn = (n) => {
	assert(typeof n === 'bigint');
	assert(n >= 0n);
	let f = 1n;

	while (n !== 0n) f *= n--;

	return f;
};

export default _factorialn;
