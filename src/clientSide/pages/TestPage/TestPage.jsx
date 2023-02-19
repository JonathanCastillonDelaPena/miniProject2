import React from "react";
import NavBar from "../../components/common/NavBar";
import CreateTestRecord from "./components/CreateTestRecord";

const TestPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <CreateTestRecord />
      </div>
    </div>
  );
};

export default TestPage;
