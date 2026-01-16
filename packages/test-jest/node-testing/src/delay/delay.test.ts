import delay from "./delay";

describe('delay()', () => {
    test('Валидно', async () => {
        const sum = await delay(() => 5 + 5, 10000);
        expect(sum).toBe(10);
    }, 50000);
});
