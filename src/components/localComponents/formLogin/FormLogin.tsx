import React, { FC, useState } from "react";

import { useTypedDispatch } from "../../../hooks/useTypedDispatch";

import { IUserLogin } from "../../../types/userTypes/IUserLogin";
import { loginUser } from "../../../services/api/login";

import FormWrapper from "../../globalComponents/formWrapper/FormWrapper";
import Button from "../../globalComponents/button/Button";
import Input from "../../globalComponents/input/Input";

const FormLogin: FC = () => {
  const dispatch = useTypedDispatch();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginData: IUserLogin = {
    login,
    password,
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };
  return (
    <FormWrapper onSubmit={(e) => handleLogin(e)}>
      <Input
        value={login}
        placeholder="Логин"
        type="text"
        onChange={(e) => setLogin(e.target.value)}
      />
      <Input
        value={password}
        placeholder="Пароль"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Войти</Button>
    </FormWrapper>
  );
};

export default FormLogin;
