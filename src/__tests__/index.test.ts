import {describe, expect, it} from 'vitest';
import add from '../libs/add';
import subtraction from '../libs/subtraction';
describe('should', () => {
    it('1 + 2 = 3', () => {
        expect(add(1, 2)).toMatchInlineSnapshot('3');
    });
    it('3 - 1 = 2', () => {
        expect(subtraction(3, 1)).toMatchInlineSnapshot('2');
    });
});
