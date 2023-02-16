import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesController from "./components/pageRouter/RoutesController";

function App() {
  return (
    <BrowserRouter>
      <RoutesController />
    </BrowserRouter>
  );
}

export default App;
