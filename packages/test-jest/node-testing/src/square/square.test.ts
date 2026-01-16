import square from "./square";

describe('square()', () => {
    test('should call Math.pow for n !== 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toHaveBeenCalledTimes(1);
        spyMathPow.mockRestore();
    });

    test('should not call Math.pow for n === 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toHaveBeenCalledTimes(0);
        spyMathPow.mockRestore();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});
