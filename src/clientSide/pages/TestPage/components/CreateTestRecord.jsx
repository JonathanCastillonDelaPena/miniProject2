import React from "react";
import { useState } from "react";
import TestDataService from "../../../../dataServices/testDataService";

const CreateTestRecord = () => {
  const initialTestState = {
    name: "",
    number: 0,
    isValid: false,
  };

  const [test, setTest] = useState(initialTestState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTest({ ...test, [name]: value });
  };

  const newTest = () => {
    setTest(initialTestState);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: test.name,
      number: test.number,
      isValid: test.isValid,
    };

    TestDataService.create(data)
      .then((response) => {
        // setTest({
        //   name: response.data.name,
        //   number: response.data.number,
        //   isValid: response.data.isValid,
        // });
        setSubmitted(true);
        console.log(`\n${response.data}`);
      })
      .catch((err) => {
        console.log(`\n${err}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div>
          <h4>Test Record Submitted!</h4>
          <button className="btn btn-success" onClick={newTest}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={test.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input
              required
              type="number"
              className="form-control"
              id="number"
              name="number"
              value={test.number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <select
              name="isValid"
              id="isValid"
              value={test.isValid}
              onChange={handleInputChange}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default CreateTestRecord;
