import {multiply2} from './index';

describe('multiply2 function', () => {
    it('should multiply a number by 2', () => {
        expect(multiply2(2)).toEqual(4);
    });

    it('should return 0 when input is 0', () => {
        expect(multiply2(0)).toEqual(0);
    });

    it('should handle negative numbers correctly', () => {
        expect(multiply2(-5)).toEqual(-10);
    });

    it('should return NaN if input is not a number', () => {
        expect(multiply2('abc' as any)).toBeNaN();
    });

    it('should return Infinity if input is Infinity', () => {
        expect(multiply2(Infinity)).toEqual(Infinity);
    });
});
