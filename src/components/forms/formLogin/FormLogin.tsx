import React, { FC, useState } from "react";

import Input from "components/globalComponents/input/Input";
import Button from "components/globalComponents/button/Button";
import FormWrapper from "components/globalComponents/formWrapper/FormWrapper";

import { useTypedDispatch } from "hooks/useTypedDispatch";

import { Link } from "react-router-dom";
import { loginUser } from "services/api/login";
import { IUserLogin } from "types/userTypes/IUserLogin";

import cl from "./FormLogin.module.scss";
import { useInput } from "hooks/useInput";
import ErrorText from "components/globalComponents/errorText/ErrorText";
import FormLoginTextFields from "./FormLoginTextFields";

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
      <FormLoginTextFields login={login} password={password} />
      <div className={cl.FooterAuth}>
        <Button type="submit">Войти</Button>
        <Link to={"/signup"}>Зарегистрироваться</Link>
      </div>
    </FormWrapper>
  );
};

export default FormLogin;
