/**
 * Prints the numbers from 1 to 100. For multiples of three, print “Fizz” instead of the number,
 * for the multiples of five print “Buzz”, and for numbers which are multiples of both three and five, print “FizzBuzz”.
 */
function fizzBuzzAlternate(): void {
  for (let index = 0; index < 100; index++) {
    const value = getFizzBuzzNumberValue(index);

    console.log(value);
  }
}

function getFizzBuzzNumberValue(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else {
    return num.toString();
  }
}

export { fizzBuzzAlternate, getFizzBuzzNumberValue };
