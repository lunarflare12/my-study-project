import validateValue from './validateValue';

describe('validateValue()', () => {
    test('Валидно', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false);
    });

    test('Равен значению снизу', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('Равен значению сверху', () => {
        expect(validateValue(100)).toBe(true);
    });
});
