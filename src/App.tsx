import FormLogin from "components/localComponents/formLogin/FormLogin";
import AppRoute from "components/routes/AppRoute";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Auth from "./views/Auth/Auth";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <div className="App">
      <AppRoute />
    </div>
  );
}

export default App;
