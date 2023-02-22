import serverURI from "./dbServerURI";
const productBaseURL = "/product";

const getAll = () => {
  return serverURI.get(productBaseURL);
};

const get = (id) => {
  return serverURI.get(`/product/${id}`);
};

const create = (data) => {
  return serverURI.post(productBaseURL, data);
};

const ProductDataService = { getAll, get, create };
export default ProductDataService;
