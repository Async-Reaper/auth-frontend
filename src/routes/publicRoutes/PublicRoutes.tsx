import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "views/Login/LoginPage";
import SignupPage from "views/Signup/SignupPage";

const PublicRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default PublicRoutes;
