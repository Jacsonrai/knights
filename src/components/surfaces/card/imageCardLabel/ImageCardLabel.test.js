import React from "react";
import { render, screen } from "@testing-library/react";
import ImageCardLabel from "./ImageCardLabel"; // Update the path accordingly

test("renders component with provided props", () => {
  const props = {
    cardImage: "image-url",
    categoryLabel: "Category",
    details: "Some details",
    keys: 1,
  };

  render(<ImageCardLabel {...props} />);

  // Check if the component renders with the provided props
  expect(screen.getByText("Category")).toBeInTheDocument();
  expect(screen.getByText("Some details")).toBeInTheDocument();
  expect(screen.getByAltText("Image for Category")).toBeInTheDocument();
});
