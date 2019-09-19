import { fizzbuzz } from '#/action';

describe("fizzbuzz", (): void => {
    test("should return FizzBuzzSwing.", (): void => {
        const response: string = fizzbuzz();
        expect(response).toBe('FizzBuzzSwing');
    });
});
