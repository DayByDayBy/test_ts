type FizzBuzzAliasOutput = "Fizz" | "Buzz" | "FizzBuzz";

function fizzBuzzA(n: number): void {
    for (let i: number = 1; i <= n; i++) {
        let output: FizzBuzzAliasOutput | number;
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
        } else {
            output = i;
        }
        console.log(output);
    }
}

fizzBuzz(100);