import ErrorText from "components/globalComponents/errorText/ErrorText";
import Input from "components/globalComponents/input/Input";
import { FC } from "react";
import { ITypeUseInput } from "types/hookTypes/typeUseInput";

interface IFormLogin {
  login: ITypeUseInput;
  password: ITypeUseInput;
}

const FormLoginTextFields: FC<IFormLogin> = ({ login, password }) => {
  return (
    <>
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
    </>
  );
};

export default FormLoginTextFields;
