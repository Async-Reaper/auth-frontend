import AppRoute from "components/appRoute/AppRoute";
import { useEffect } from "react";
import WebFont from "webfontloader";

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
