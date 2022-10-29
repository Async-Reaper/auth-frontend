import React from "react";
import PrivateRoutes from "routes/privateRoutes/PrivateRoutes";
import PublicRoutes from "routes/publicRoutes/PublicRoutes";

const AppRoute = () => {
  return (
    <div>
      {localStorage.getItem("token") ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
};

export default AppRoute;
