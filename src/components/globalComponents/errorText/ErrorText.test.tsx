import { screen } from "@testing-library/react";
import { testingRender } from "helpers/testing/testingRender";
import "@testing-library/jest-dom";
import ErrorText from "./ErrorText";

describe("Testing error text", () => {
  test("Test show text error", () => {
    testingRender(<ErrorText dataTestId="error-text">Hi</ErrorText>, {
      route: "/",
    });

    expect(screen.getByTestId("error-text")).toBeInTheDocument();
    expect(screen.getByTestId("error-text")).toHaveTextContent(/hi/i);
  });
});
