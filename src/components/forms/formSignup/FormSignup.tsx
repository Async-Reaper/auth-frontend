import Button from "components/globalComponents/button/Button";
import FormWrapper from "components/globalComponents/formWrapper/FormWrapper";
import Input from "components/globalComponents/input/Input";
import { useTypedDispatch } from "hooks/useTypedDispatch";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "services/api/signup";
import { IUserSignup } from "types/userTypes/IUserSignup";
import cl from "./FormSignup.module.scss";

const FormSignup = () => {
  const dispatch = useTypedDispatch();
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signupData: IUserSignup = {
    name,
    surname,
    email,
    login,
    password,
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signupUser(signupData));
  };

  return (
    <FormWrapper onSubmit={(e) => handleLogin(e)}>
      <Input
        value={name}
        placeholder="Имя"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        value={surname}
        placeholder="Фамилия"
        type="text"
        onChange={(e) => setSurname(e.target.value)}
      />
      <Input
        value={email}
        placeholder="Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
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
        <Link to={"/"}>Назад</Link>
      </div>
    </FormWrapper>
  );
};

export default FormSignup;
