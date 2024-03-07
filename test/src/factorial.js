import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';

import {TypeError, ValueError, sequence} from './_fixtures.js';

import {factorial, lookup} from '#module';

// eslint-disable-next-line eqeqeq
const macro = (t, n, f) => t.true(factorial(n) == f);

macro.title = (title, n, f) => title ?? `${n}! = ${f}`;

for (const [n, f] of enumerate(sequence)) test(macro, n, f);

const throws = (t, n, instanceOf) => t.throws(() => factorial(n), {instanceOf});

throws.title = (title, n, instanceOf) =>
	title ?? `${n}! throws ${instanceOf.name}`;

test(throws, '', TypeError);
test(throws, 7n, TypeError);
test(throws, 2.3, ValueError);
test(throws, -1, ValueError);
test(throws, lookup.length, ValueError);
