import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OnClickEventOnButton from "./OnClickEventOnButton";

test("test onClick event", () => {
  render(<OnClickEventOnButton />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  const checkResultData = screen.getByText("Data");
  expect(checkResultData).toBeInTheDocument();
});
