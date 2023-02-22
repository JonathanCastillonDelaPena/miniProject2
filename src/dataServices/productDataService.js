import serverURI from "./dbServerURI";
const productBaseURL = "/product";

const getAll = () => {
  return serverURI.get(productBaseURL);
};

const get = (id) => {
  return serverURI.get(`${productBaseURL}/${id}`);
};

const create = (data) => {
  return serverURI.post(productBaseURL, data);
};

const update = (id, data) => {
  return serverURI.put(`${productBaseURL}/${id}`, data);
};

const remove = (id) => {
  return serverURI.delete(`${productBaseURL}/${id}`);
};

const removeAll = () => {
  return serverURI.delete(productBaseURL);
};

const ProductDataService = { getAll, get, create, update, remove, removeAll };
export default ProductDataService;
