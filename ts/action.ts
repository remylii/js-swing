export function fizzbuzz(limit: number): string {
    let result = [];
    for (let i = 1; i <= limit; i++) {
        result.push(calc(i));
    }
    return result.join("");
}

type CalcResult = string;
export function calc(n: number): CalcResult {
    let res = "";
    if (n % 3 === 0) {
        res += "Fizz";
    }
    if (n % 5 === 0) {
        res += "Buzz";
    }

    if (res === "") {
        res = n.toString();
    }

    return res;
}
