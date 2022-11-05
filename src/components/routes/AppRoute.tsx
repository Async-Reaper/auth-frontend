import { useTypedDispatch } from "hooks/useTypedDispatch";
import { useTypedSelector } from "hooks/useTypedSelector";
import React, { useEffect } from "react";
import PrivateRoutes from "routes/privateRoutes/PrivateRoutes";
import PublicRoutes from "routes/publicRoutes/PublicRoutes";
import { setLoginStatus } from "store/slices/auth/auth.slice";

const AppRoute = () => {
  const { loginStatus } = useTypedSelector((state) => state.login);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    localStorage.getItem("token")
      ? dispatch(setLoginStatus(true))
      : dispatch(setLoginStatus(false));
  }, [loginStatus]);

  return <div>{loginStatus ? <PrivateRoutes /> : <PublicRoutes />}</div>;
};

export default AppRoute;
