import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SocialLinkCard from "../index";

describe("SocialLinkCard Component", () => {
  it("renders with provided card label and link", () => {
    const props = {
      cardLabel: "Facebook",
      setlink: "/facebook",
    };

    render(
      <Router>
        <SocialLinkCard {...props} />
      </Router>
    );

    const linkElement = screen.getByTestId("setlink");
    expect(linkElement).toHaveAttribute("href", "/facebook");

    const cardLabelElement = screen.getByTestId("cardLabel");
    expect(cardLabelElement).toHaveTextContent("Facebook");
  });
});
