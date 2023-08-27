import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FooterLayout from "../FooterLayout";

jest.mock("../../../../assets/union.png", () => "./__mocks__/union.png");
jest.mock("../../../../assets/appstore.png", () => "./__mocks__/appstore.png");
jest.mock(
  "../../../../assets/playstore.png",
  () => "./__mocks__/playstore.png"
);
describe("FooterLayout Component", () => {
  const socialLinksData = [{ name: "Facebook" }, { name: "Twitter" }];

  const quickLinksData = [
    [
      { name: "Link 1", path: "/link1" },
      { name: "Link 2", path: "/link2" },
    ],
    [
      { name: "Contact Link 1", path: "/contact-link1" },
      { name: "Contact Link 2", path: "/contact-link2" },
    ],
    [
      { name: "Legal Link 1", path: "/legal-link1" },
      { name: "Legal Link 2", path: "/legal-link2" },
    ],
  ];

  it("renders social links with provided data", () => {
    render(
      <Router>
        <FooterLayout socialLinksData={socialLinksData} quickLinksData={[]} />
      </Router>
    );

    const socialLinkElements = screen.getAllByTestId("setlink");
    expect(socialLinkElements).toHaveLength(4);
  });

  it("renders quick links with provided data", () => {
    render(
      <Router>
        <FooterLayout socialLinksData={[]} quickLinksData={quickLinksData} />
      </Router>
    );

    const linkElements = screen.getAllByTestId("link");
    const linkElement1 = screen.getAllByTestId("link1");
    const linkElement2 = screen.getAllByTestId("link2");

    quickLinksData[0].forEach((link) => {
      const matchingLink = linkElements.find(
        (el) => el.getAttribute("href") === link.path
      );

      expect(matchingLink).toBeInTheDocument();
    });
    quickLinksData[1].forEach((link) => {
      const matchingLink = linkElement1.find(
        (el) => el.getAttribute("href") === link.path
      );

      expect(matchingLink).toBeInTheDocument();
    });
    quickLinksData[2].forEach((link) => {
      const matchingLink = linkElement2.find(
        (el) => el.getAttribute("href") === link.path
      );

      expect(matchingLink).toBeInTheDocument();
    });
  });
});
