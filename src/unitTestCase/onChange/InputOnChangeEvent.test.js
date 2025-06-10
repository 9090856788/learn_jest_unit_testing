import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputOnChangeEvent from "./InputOnChangeEvent";

describe("Test Input field", () => {
  // check onChange handler
  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<input type="text" onChange={handleChange} />);
    const inputValue = screen.getByRole("textbox");
    fireEvent.change(inputValue, { target: { value: "hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputValue.value).toBe("hello");
  });
});
