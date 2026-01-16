import mapArrToString from "./mapArrToString";

describe('mapArrToString()', () => {
    test('Валидно', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    });

    test('Мешанина', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'asdfe'])).toEqual(["1", "2", "3"]);
    });

    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(["1", "2", "3", "4"]);
    });
});
