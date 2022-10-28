import { useEffect } from "react";
import WebFont from "webfontloader";
import FormLogin from "./components/forms/formWrapper/FormLogin";

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
      <FormLogin />
    </div>
  );
}

export default App;
