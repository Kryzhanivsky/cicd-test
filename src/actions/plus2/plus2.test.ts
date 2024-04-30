import {plus2} from "./index"

describe('plus2 function', () => {
    it('should add 2 to the given number', () => {
        expect(plus2(3)).toEqual(5);
    });

    it('should return the same number if 0 is added', () => {
        expect(plus2(0)).toEqual(2);
    });

    it('should return a negative number if a negative number is given', () => {
        expect(plus2(-3)).toEqual(-1);
    });
});
