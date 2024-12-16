enum FizzBuzzEnumOutput {
    Fizz = "Fizz",
    Buzz = "Buzz",
    FizzBuzz = "FizzBuzz"
}

function fizzBuzzE(n: number): void {
    for (let i: number = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(FizzBuzzEnumOutput.FizzBuzz);
        } else if (i % 3 === 0) {
            console.log(FizzBuzzEnumOutput.Fizz);
        } else if (i % 5 === 0) {
            console.log(FizzBuzzEnumOutput.Buzz);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(100);