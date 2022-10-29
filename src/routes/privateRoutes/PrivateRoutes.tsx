import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "views/Home/HomePage";

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default PrivateRoutes;
