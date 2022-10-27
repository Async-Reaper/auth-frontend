import React, { FC, useState } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { loginUser } from "../../../services/api/login";
import { IUserLogin } from "../../../types/userTypes/IUserLogin";
import Input from "../input/Input";

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
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <input type="text" onChange={(e) => setLogin(e.target.value)} />
        <Input
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormLogin;
