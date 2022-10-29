import AppRoute from "components/routes/AppRoute";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WebFont from "webfontloader";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
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
