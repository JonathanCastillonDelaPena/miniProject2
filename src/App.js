import "./clientSide/css/App.css";
import "./adminSide/css/Login.css";
import { BrowserRouter } from "react-router-dom";
import RoutesController from "./clientSide/components/pageRouter/RoutesController";

function App() {
  return (
    <BrowserRouter>
      <RoutesController />
    </BrowserRouter>
  );
}

export default App;
