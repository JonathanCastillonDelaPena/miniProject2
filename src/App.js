import "./clientSide/css/App.css";
import "./adminSide/css/Login.css"
import { BrowserRouter } from "react-router-dom";
// import RoutesController from "./clientSide/components/pageRouter/RoutesController";
// import Dashboard from "./adminSide/components/Dashboard"

import CustomerInfo from "./adminSide/components/CustomerInfo";



function App() {
  return (
    <BrowserRouter>
      {/* <RoutesController /> */}
      {/* <Dashboard/> */}
<CustomerInfo/>
    </BrowserRouter>
  );
}

export default App;
