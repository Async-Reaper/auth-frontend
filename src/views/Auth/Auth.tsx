import { FC, useState } from "react";
import FormSignup from "../../components/localComponents/formSignup/FormSignup";

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
