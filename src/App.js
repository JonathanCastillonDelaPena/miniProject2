import "./clientSide/css/App.css";
import "./adminSide/css/Login.css"
import { BrowserRouter } from "react-router-dom";
// import RoutesController from "./clientSide/components/pageRouter/RoutesController";
// import Dashboard from "./adminSide/components/Dashboard";
import Cart from "./adminSide/components/Cart";




function App() {
  return (
    <BrowserRouter>
      {/* <RoutesController /> */}
   {/* <Dashboard/> */}
   <Cart/>
    </BrowserRouter>
  );
}

export default App;
