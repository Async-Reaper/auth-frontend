import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { testingRender } from "helpers/testing/testingRender";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Testing login form", () => {
  let response: any;
  beforeEach(() => {
    response: {
      data: {
        message: "Регистрация прошла успешно";
      }
    }
  });

  test("Test input change", () => {
    testingRender(null, { route: "/signup" });
    const nameInput = screen.getByTestId("name-input") as HTMLInputElement;
    const surnamedInput = screen.getByTestId(
      "surname-input"
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const loginInput = screen.getByTestId("login-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;
    const repeatPasswordInput = screen.getByTestId(
      "repeatPassword-input"
    ) as HTMLInputElement;

    userEvent.type(nameInput, "d");
    expect(nameInput.value).toBe("d");

    userEvent.type(surnamedInput, "d");
    expect(surnamedInput.value).toBe("d");

    userEvent.type(emailInput, "d");
    expect(emailInput.value).toBe("d");

    userEvent.type(loginInput, "d");
    expect(loginInput.value).toBe("d");

    userEvent.type(passwordInput, "d");
    expect(passwordInput.value).toBe("d");

    userEvent.type(repeatPasswordInput, "d");
    expect(repeatPasswordInput.value).toBe("d");
  });

  test("Test show error", async () => {
    testingRender(null, { route: "/signup" });
    const loginBtn = screen.getByTestId("signup-btn");
    userEvent.click(loginBtn);
    const errors = await screen.findAllByTestId("error");
    errors.map((error) => expect(error).toBeInTheDocument());
  });

  test("Test post request", async () => {
    mockedAxios.post.mockReturnValue(response);

    testingRender(null, { route: "/signup" });
    const signupBtn = screen.getByTestId("signup-btn");
    const nameInput = screen.getByTestId("name-input") as HTMLInputElement;
    const surnamedInput = screen.getByTestId(
      "surname-input"
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const loginInput = screen.getByTestId("login-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;
    const repeatPasswordInput = screen.getByTestId(
      "repeatPassword-input"
    ) as HTMLInputElement;

    userEvent.type(nameInput, "d");
    userEvent.type(surnamedInput, "d");
    userEvent.type(emailInput, "d@mail.ru");
    userEvent.type(loginInput, "d");
    userEvent.type(passwordInput, "dsdfasfafafSDSD34");
    userEvent.type(repeatPasswordInput, "dsdfasfafafSDSD34");

    userEvent.click(signupBtn);
    expect(axios.post).toBeCalledTimes(1);
  });

  test("Test navigate signup page", () => {
    testingRender(null, { route: "/signup" });
    const linkSignup = screen.getByTestId("link-login");
    userEvent.click(linkSignup);
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });
});
