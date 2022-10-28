import React, { FC, useState } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { loginUser } from "../../../services/api/login";
import { IUserLogin } from "../../../types/userTypes/IUserLogin";
import Button from "../../UI/button/Button";
import Input from "../input/Input";
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
    <div className={cl.FormWrapper}>
      <form className={cl.FormLogin} onSubmit={(e) => handleLogin(e)}>
        <Input
          placeholder="Логин"
          type="text"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
};

export default FormLogin;
