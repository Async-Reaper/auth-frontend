import FormSignup from "components/forms/formSignup/FormSignup";
import { FC, useState } from "react";

const Auth: FC = () => {
  const [checked, setChecked] = useState<boolean>(true);

  localStorage.setItem("type_reg", JSON.stringify(checked));

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <FormSignup />
    </div>
  );
};

export default Auth;
