import React from "react";
import { useState, useEffect } from "react";
import TestDataService from "../../../dataServices/testDataService";

const ListTestRecords = () => {
  const [tests, setTests] = useState([]);
  let displayTest = <></>;

  const retrieveTests = () => {
    TestDataService.getAll()
      .then((response) => {
        setTests(response.data);
      })
      .catch((err) => {
        console.log(`\n${err}`);
      });
  };

  useEffect(() => {
    retrieveTests();
  }, []);

  if (tests.length !== 0) {
    displayTest = tests.map((test) => {
      return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Name: {test.name}</h4>
            <h5 className="card-subtitle">Number: {test.number}</h5>
            <p className="card-text">Valid: {test.isValid.toString()}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>List of Test Records</h1>
      <div className="d-flex flex-row flex-wrap">{displayTest}</div>
    </div>
  );
};

export default ListTestRecords;
