import { expect } from 'vitest';
import { Todo } from '$lib/index';

export class Context {
	private _numbers: number[] = [];
	private _result: number = 0;

	given_numbers(...numbers: number[]) {
		this._numbers = numbers;
	}

	when_summed() {
		const app = new Todo();
		this._result = app.sum(this._numbers);
	}

	then_result_is(expected: number) {
		expect(this._result).toBe(expected);
	}
}
