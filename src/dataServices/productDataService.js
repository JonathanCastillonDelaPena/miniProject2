import serverURI from "./dbServerURI";
const productBaseURL = "/product";

const getAll = () => {
  return serverURI.get(productBaseURL);
};

const create = (data) => {
  return serverURI.post(productBaseURL, data);
};

const ProductDataService = { getAll, create };
export default ProductDataService;
