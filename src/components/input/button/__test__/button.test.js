import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../index";

describe("Button Component", () => {
  it("renders with small size and label", () => {
    render(<Button btnLabel="Small Button" btnSize="small" />);
    const buttonElement = screen.getByTestId("btnSize");
    expect(buttonElement).toHaveClass(
      "text-white hover:text-black border pt-2 pb-2 pl-4 pr-4"
    );
  });

  it("renders with medium size and label", () => {
    render(<Button btnLabel="Medium Button" btnSize="medium" />);
    const buttonElement = screen.getByTestId("btnSize");
    expect(buttonElement).toHaveClass(
      "text-white hover:text-black border pt-2 pb-2 pl-8 pr-8"
    );
  });

  it("renders with large size and label", () => {
    render(<Button btnLabel="Large Button" btnSize="large" />);
    const buttonElement = screen.getByTestId("btnSize");
    expect(buttonElement).toHaveClass(
      "hover:text-black border pt-2 pb-2 pl-20 pr-20"
    );
  });
});
