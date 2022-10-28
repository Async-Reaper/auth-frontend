import { useEffect } from "react";
import WebFont from "webfontloader";
import FormLogin from "./components/localComponents/formLogin/FormLogin";
import FormSignup from "./components/localComponents/formSignup/FormSignup";
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
      <Auth />
    </div>
  );
}

export default App;
