import React, { FC } from "react";

import Button from "components/globalComponents/button/Button";
import FormWrapper from "components/globalComponents/formWrapper/FormWrapper";
import Input from "components/globalComponents/input/Input";

import { useTypedDispatch } from "hooks/useTypedDispatch";

import { Link } from "react-router-dom";
import { loginUser } from "services/api/login/login";
import { IUserLogin } from "types/userTypes/IUserLogin";

import ErrorText from "components/globalComponents/errorText/ErrorText";
import { useInput } from "hooks/useInput";
import cl from "./FormLogin.module.scss";

const FormLogin: FC = () => {
  const dispatch = useTypedDispatch();
  const login = useInput("", { isEmpty: true });
  const password = useInput("", { isEmpty: true });
  const loginData: IUserLogin = {
    login: login.value,
    password: password.value,
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.onBlur();
    password.onBlur();
    if (!login.isEmpty && !password.isEmpty) {
      dispatch(loginUser(loginData));
    }
  };
  return (
    <FormWrapper onSubmit={(e) => handleLogin(e)}>
      <Input
        value={login.value}
        placeholder="Логин"
        type="text"
        onChange={login.onChange}
        dataTestId="login-input"
      />
      {login.isDirty && login.isEmpty && (
        <ErrorText dataTestId="error">Поле является обязательным</ErrorText>
      )}
      <Input
        value={password.value}
        placeholder="Пароль"
        type="password"
        onChange={password.onChange}
        dataTestId="password-input"
      />
      {password.isDirty && password.isEmpty && (
        <ErrorText dataTestId="error">Поле является обязательным</ErrorText>
      )}
      <div className={cl.FooterAuth}>
        <Button type="submit" dataTestId="login-btn">
          Войти
        </Button>
        <Link to={"/signup"} data-testid="link-signup">
          Зарегистрироваться
        </Link>
      </div>
    </FormWrapper>
  );
};

export default FormLogin;
