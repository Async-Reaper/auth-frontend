import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testingRender } from "helpers/testing/testingRender";
import FormWrapper from "./FormWrapper";

describe("Testing form wrapper", () => {
  test("Test show form wrapper", () => {
    const mockFunc = jest.fn((e) => e);
    testingRender(
      <FormWrapper dataTestId="form-wrapper" onSubmit={(e) => mockFunc(e)}>
        <button type="submit" data-testid="btn-form">
          Click
        </button>
      </FormWrapper>,
      { route: "/" }
    );
    expect(screen.getByTestId("form-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("btn-form")).toBeInTheDocument();
  });

  test("Testing work func onSubmit", () => {
    const mockFunc = jest.fn(() => Promise.resolve());

    testingRender(
      <FormWrapper dataTestId="form-wrapper" onSubmit={(e) => mockFunc()}>
        <button type="submit" data-testid="btn-form">
          Click
        </button>
      </FormWrapper>,
      { route: "/" }
    );
    userEvent.click(screen.getByTestId("btn-form"));
    expect(mockFunc).toBeCalledTimes(1);
  });
});
