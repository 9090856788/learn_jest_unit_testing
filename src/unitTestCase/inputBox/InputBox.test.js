import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputBox from "./InputBox";

describe("InputBox Component", () => {

  // check the inputBox is rendered or not
  test("check the input field is rendered", () => {
    render(<InputBox />);
    let checkInputBox = screen.getByRole("textbox");
    expect(checkInputBox).toBeInTheDocument();
  });

  // Placeholder check
  test("check placeholder text", () => {
    render(<InputBox placeholder="Enter your text" />);
    let checkPlaceHolder = screen.getByPlaceholderText("Enter your text");
    expect(checkPlaceHolder).toBeInTheDocument();
  });

  // Uncontrolled input with defaultValue

  test("check default value", () => {
    render(<InputBox defaultValue="defaultValue" />);
    let checkDefaultValue = screen.getByDisplayValue("defaultValue");
    expect(checkDefaultValue).toBeInTheDocument();
  });

  // Controlled input with value
  test("check controlled value", () => {
    render(<InputBox value={"controlledValue"} onChange={() => {}} />);
    let checkControlledValue = screen.getByDisplayValue("controlledValue");
    expect(checkControlledValue).toBeInTheDocument();
  });
  // Check onChange event
  test("onChange handler", () => {
    const handleChange = jest.fn();
    render(<InputBox onChange={handleChange} />);
    let inputValue = screen.getByRole("textbox");
    fireEvent.change(inputValue, { target: { value: "new Value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputValue.value).toBe("new Value");
  });

  
});
