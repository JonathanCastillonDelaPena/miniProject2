import http from "../httpCommon";
const testBaseURL = "/testingPage";

const getAll = () => {
  return http.get(testBaseURL);
};

const create = (data) => {
  return http.post(testBaseURL, data);
};

const TestDataService = { getAll, create };
export default TestDataService;
