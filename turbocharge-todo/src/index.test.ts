import { describe, it, beforeEach } from 'vitest';
import { Context } from './Context';

describe('sum test', () => {
	let _ctx: Context; // Declare _ctx variable

	beforeEach(() => {
		_ctx = new Context(); // Initialize _ctx variable
	});

	it('adds 1 + 2 to equal 3', () => {
		_ctx.given_numbers(1, 2);
		_ctx.when_summed();
		_ctx.then_result_is(3);
	});

});


