import { fizzBuzz } from "./fizzbuzz";

describe("getFizzBuzzValueForNumber", () => {
  test("should call console log 100 times", () => {
    const spy = jest.spyOn(console, "log");
    fizzBuzz();
    expect(spy).toHaveBeenCalledTimes(100);
  });
});
