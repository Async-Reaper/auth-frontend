import Button from "components/globalComponents/button/Button";
import ErrorText from "components/globalComponents/errorText/ErrorText";
import FormWrapper from "components/globalComponents/formWrapper/FormWrapper";
import Input from "components/globalComponents/input/Input";
import { useInput } from "hooks/useInput";
import { useTypedDispatch } from "hooks/useTypedDispatch";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "services/api/signup";
import { IUserSignup } from "types/userTypes/IUserSignup";
import cl from "./FormSignup.module.scss";

const FormSignup = () => {
  const dispatch = useTypedDispatch();
  const name = useInput("", { isEmpty: true });
  const surname = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true, emailValid: true });
  const login = useInput("", { isEmpty: true });
  const password = useInput("", {
    isEmpty: true,
    passwordValid: true,
    minLength: 8,
  });
  const repeatPassword = useInput("", { isEmpty: true });

  const signupData: IUserSignup = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    login: login.value,
    password: password.value,
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    name.onBlur();
    surname.onBlur();
    email.onBlur();
    login.onBlur();
    password.onBlur();
    repeatPassword.onBlur();
    if (
      !name.isEmpty &&
      !surname.isEmpty &&
      !login.isEmpty &&
      !email.emailValid &&
      !password.passwordValid &&
      !password.isEmpty &&
      repeatPassword.value === password.value
    ) {
      dispatch(signupUser(signupData));
    }
  };

  return (
    <FormWrapper onSubmit={(e) => handleLogin(e)}>
      <Input
        value={name.value}
        placeholder="Имя"
        type="text"
        onChange={name.onChange}
      />
      {name.isDirty && name.isEmpty && (
        <ErrorText>Поле является обязательным</ErrorText>
      )}
      <Input
        value={surname.value}
        placeholder="Фамилия"
        type="text"
        onChange={surname.onChange}
      />
      {surname.isDirty && surname.isEmpty && (
        <ErrorText>Поле является обязательным</ErrorText>
      )}
      <Input
        value={email.value}
        placeholder="Email"
        type="text"
        onChange={email.onChange}
      />
      {email.isDirty && email.isEmpty && (
        <ErrorText>Поле является обязательным</ErrorText>
      )}
      {email.isDirty && email.emailValid && (
        <ErrorText>Не является email</ErrorText>
      )}
      <Input
        value={login.value}
        placeholder="Логин"
        type="text"
        onChange={login.onChange}
      />
      {login.isDirty && login.isEmpty && (
        <ErrorText>Поле является обязательным</ErrorText>
      )}
      <Input
        value={password.value}
        placeholder="Пароль"
        type="password"
        onChange={password.onChange}
      />
      {password.isDirty && password.isEmpty && (
        <ErrorText>Поле является обязательным</ErrorText>
      )}
      {password.isDirty && password.minLength && (
        <ErrorText>Пароль должен содержать более 8 символов</ErrorText>
      )}
      {password.isDirty && password.passwordValid && (
        <ErrorText>
          Пароль должен содержать: цифры, строчные и прописные символы латиницы
        </ErrorText>
      )}
      <Input
        value={repeatPassword.value}
        placeholder="Пароль"
        type="password"
        onChange={repeatPassword.onChange}
      />
      {repeatPassword.isDirty && repeatPassword.isEmpty && (
        <ErrorText>Поле является обязательным</ErrorText>
      )}
      {repeatPassword.isDirty && repeatPassword.value !== password.value && (
        <ErrorText>Пароли не совпадают</ErrorText>
      )}
      <div className={cl.FooterAuth}>
        <Button type="submit">Войти</Button>
        <Link to={"/"}>Назад</Link>
      </div>
    </FormWrapper>
  );
};

export default FormSignup;
