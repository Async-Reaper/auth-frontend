import FormLogin from "components/localComponents/formLogin/FormLogin";
import FormSignup from "components/localComponents/formSignup/FormSignup";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const PublicRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/signup" element={<FormSignup />} />
    </Routes>
  );
};

export default PublicRoutes;
