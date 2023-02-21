import serverURI from "./dbServerURI";
const testBaseURL = "/testingPage";

const getAll = () => {
  return serverURI.get(testBaseURL);
};

const create = (data) => {
  return serverURI.post(testBaseURL, data);
};

const TestDataService = { getAll, create };
export default TestDataService;
