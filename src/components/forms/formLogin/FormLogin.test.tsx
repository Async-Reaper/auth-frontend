import { cleanup, getByPlaceholderText, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testingRender } from "helpers/testing/testingRender";
import "@testing-library/jest-dom";
import axios from "axios";
import { experimentalStyled } from "@mui/material";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Testing login form", () => {
  let response: any;
  beforeEach(() => {
    response: {
      data: {
        token: "sdafaf";
      }
    }
  });

  test("Test input change", () => {
    testingRender(null, { route: "/" });
    const loginInput = screen.getByTestId("login-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;
    userEvent.type(loginInput, "d");
    expect(loginInput.value).toBe("d");
    userEvent.type(passwordInput, "d");
    expect(passwordInput.value).toBe("d");
  });

  test("Test show error", async () => {
    testingRender(null, { route: "/" });
    const loginBtn = screen.getByTestId("login-btn");
    userEvent.click(loginBtn);
    const errors = await screen.findAllByTestId("error");
    screen.debug();
    errors.map((error) => expect(error).toBeInTheDocument());
  });

  test("Test post request", async () => {
    mockedAxios.post.mockReturnValue(response);
    testingRender(null, { route: "/" });
    const loginBtn = screen.getByTestId("login-btn");
    const loginInput = screen.getByTestId("login-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;
    userEvent.type(loginInput, "d");
    userEvent.type(passwordInput, "d");
    userEvent.click(loginBtn);
    expect(axios.post).toBeCalledTimes(1);
  });

  test("Test navigate signup page", () => {
    testingRender(null, { route: "/" });
    const linkSignup = screen.getByTestId("link-signup");
    screen.debug();
    userEvent.click(linkSignup);
    expect(screen.getByTestId("signup-page")).toBeInTheDocument();
  });
});
