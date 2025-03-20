import sum from "./sum";

test("test the sum function", () => {
    let a = 10;
    let b = 20;
    let output = a + b;
    expect(sum(a, b)).toBe(output);
});