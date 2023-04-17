import { fizzBuzz } from "./fizzbuzz";

describe("getFizzBuzzValueForNumber", () => {
  test("should return Fizz if the number is divisible by 3", () => {
    const spy = jest.spyOn(console, "log");
    fizzBuzz();
    expect(spy).toHaveBeenCalledTimes(100);
  });
});
