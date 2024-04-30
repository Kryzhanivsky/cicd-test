import {minus2} from './index';

describe('minus2 function', () => {
    it('should subtract 2 from the given number', () => {
        expect(minus2(5)).toEqual(3);
    });

    it('should return 0 if given number is 2', () => {
        expect(minus2(2)).toEqual(0);
    });

    it('should return a negative number if the given number is less than 2', () => {
        expect(minus2(1)).toEqual(-1);
    });

    it('should work with negative numbers', () => {
        expect(minus2(-5)).toEqual(-7);
    });

    it('should return NaN if the given value is NaN', () => {
        expect(minus2(NaN)).toBeNaN();
    });
});
