import { screen } from "@testing-library/react";
import { testingRender } from "helpers/testing/testingRender";

describe("Testing public routes", () => {
  test("Test route for login", () => {
    testingRender(null, { route: "/" });
    expect(screen.getByTestId("login-page"));
  });

  test("Test route for sigup", () => {
    testingRender(null, { route: "/signup" });
    expect(screen.getByTestId("signup-page"));
  });
});
