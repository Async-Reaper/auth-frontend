import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testingRender } from "helpers/testing/testingRender";

describe("Testing app route", () => {
  test("Test show public route", () => {
    testingRender(null, { route: "/" });
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("link-signup"));
    expect(screen.getByTestId("signup-page")).toBeInTheDocument();
  });

  test("Test show private route", () => {
    const mockFunc = jest.fn((e) => localStorage.setItem("token", e));
    mockFunc("f");

    testingRender(null, {
      route: "/",
      initialState: {
        login: {
          loginStatus: true,
        },
      },
    });

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
