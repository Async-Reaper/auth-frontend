import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testingRender } from "helpers/testing/testingRender";
import Input from "./Input";

describe("Testing input", () => {
  let i: string;
  test("Testing show input", () => {
    const mockFunc = jest.fn((e) => e);
    testingRender(
      <Input
        dataTestId="input"
        value="i"
        placeholder="login"
        type="text"
        onChange={(e) => mockFunc(e)}
      />,
      { route: "/" }
    );
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  test("Testing work onChange", () => {
    const mockFunc = jest.fn((e) => e + i);
    testingRender(
      <Input
        dataTestId="input"
        value={i}
        placeholder="login"
        type="text"
        onChange={(e) => mockFunc(e)}
      />,
      { route: "/" }
    );
    userEvent.type(screen.getByTestId("input"), "3f");
    expect(screen.getByTestId("input")).toHaveValue("3f");
  });
});
