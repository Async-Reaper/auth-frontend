import { screen } from "@testing-library/react";
import { testingRender } from "helpers/testing/testingRender";
import ContentWrapper from "./ContentWrapper";
import "@testing-library/jest-dom";

describe("Testing content wrapper", () => {
  test("Test show view child component", () => {
    testingRender(
      <ContentWrapper>
        <p data-testid="child-component">Hi</p>
      </ContentWrapper>,
      { route: "/" }
    );
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });
});
