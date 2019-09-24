import { fizzbuzz, calc } from "#/action";

describe("fizzbuzz", (): void => {
    test("should return FizzBuzz.", (): void => {
        const response: string = fizzbuzz(15);
        expect(response).toBe("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
    });
});

type CalcTable = [...[number, string][]];
const calcProvider : CalcTable = [[1, "1"], [3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]];
describe.each(calcProvider)("calc(%d)", (argv: number, expected: string) => {
    test(`return ${expected}`, () => {
        expect(calc(argv)).toBe(expected);
    });
});
