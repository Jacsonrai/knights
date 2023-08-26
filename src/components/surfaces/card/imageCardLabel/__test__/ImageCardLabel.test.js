import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageCardLabel from "../index"; // Update the path accordingly

test("renders component with provided props", () => {
  const props = {
    cardImage: "image-url",
    categoryLabel: "Category",
    details: "Some details",
    keys: 1,
  };

  render(<ImageCardLabel {...props} />);
  const categoryTest = screen.getByTestId("category");
  const imageTest = screen.getByTestId("image");
  const detailsTest = screen.getByTestId("details");

  // Check if the component renders with the provided props
  expect(categoryTest).toHaveTextContent("Category");
  expect(imageTest).toBeInTheDocument();
  expect(detailsTest).toHaveTextContent("Some details");
});
