import { getFizzBuzzNumberValue } from "./fizzbuzz-alternate";

describe("getFizzBuzzValueForNumber", () => {
  test("should return Fizz if the number is divisible by 3", () => {
    const result = getFizzBuzzNumberValue(6);

    expect(result).toBe("Fizz");
  });

  test("should return Buzz if the number is divisible by 5", () => {
    const result = getFizzBuzzNumberValue(35);

    expect(result).toBe("Buzz");
  });

  test("should return FizzBuzz if the number is divisible by 5 and 3", () => {
    const result = getFizzBuzzNumberValue(45);

    expect(result).toBe("FizzBuzz");
  });

  test("should return the number itself as a string if the number is not divisible by 5 or 3", () => {
    const result = getFizzBuzzNumberValue(64);

    expect(result).toBe("64");
  });
});
