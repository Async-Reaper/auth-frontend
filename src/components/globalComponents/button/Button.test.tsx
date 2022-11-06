import { screen } from "@testing-library/react";
import { testingRender } from "helpers/testing/testingRender";
import Button from "./Button";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Testing button", () => {
  test("Test show button", () => {
    testingRender(
      <Button type="button" dataTestId="btn" onClick={() => console.log("1")}>
        Click
      </Button>,
      { route: "/" }
    );
    expect(screen.getByTestId("btn")).toBeInTheDocument();
    expect(screen.getByTestId("btn")).toHaveTextContent(/click/i);
  });

  test("Test work func entry button", () => {
    const mockFunc = jest.fn((x) => x);
    testingRender(
      <Button type="button" dataTestId="btn" onClick={() => mockFunc(2)}>
        Click
      </Button>,
      { route: "/" }
    );

    userEvent.click(screen.getByTestId("btn"));
    expect(mockFunc).toBeCalledTimes(1);
  });
});
