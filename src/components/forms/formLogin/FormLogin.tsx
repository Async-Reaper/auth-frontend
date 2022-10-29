import React, { FC, useState } from "react";

import Input from "components/globalComponents/input/Input";
import Button from "components/globalComponents/button/Button";
import FormWrapper from "components/globalComponents/formWrapper/FormWrapper";

import { useTypedDispatch } from "hooks/useTypedDispatch";

import { Link } from "react-router-dom";
import { loginUser } from "services/api/login";
import { IUserLogin } from "types/userTypes/IUserLogin";

import cl from "./FormLogin.module.scss";

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
      <div className={cl.FooterAuth}>
        <Button type="submit">Войти</Button>
        <Link to={"/signup"}>Зарегистрироваться</Link>
      </div>
    </FormWrapper>
  );
};

export default FormLogin;
