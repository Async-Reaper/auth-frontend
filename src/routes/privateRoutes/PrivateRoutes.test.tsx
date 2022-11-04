import { screen } from "@testing-library/react";
import { testingRender } from "helpers/testing/testingRender";

describe("Testing private routes", () => {
  beforeEach(() => {
    localStorage.setItem("token", "1");
  });
  test("Test route for home page", () => {
    testingRender(null, { route: "/" });
    expect(screen.getByTestId("home-page"));
  });
});
