import React from "react";
import NavBar from "../../components/common/NavBar";
import CreateTestRecord from "./components/CreateTestRecord";
import ListTestRecords from "./components/ListTestRecords";

const TestPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <CreateTestRecord />
        <ListTestRecords />
      </div>
    </div>
  );
};

export default TestPage;
