import serverURI from "./dbServerURI";
const cartBaseURL = "/cart";

const getAll = () => {
  return serverURI.get(cartBaseURL);
};

const get = (id) => {
  return serverURI.get(`${cartBaseURL}/${id}`);
};

const create = (data) => {
  return serverURI.post(cartBaseURL, data);
};

const update = (id, data) => {
  return serverURI.put(`${cartBaseURL}/${id}`, data);
};

const remove = (id) => {
  return serverURI.delete(`${cartBaseURL}/${id}`);
};

const removeAll = () => {
  return serverURI.delete(cartBaseURL);
};

const CartDataService = { getAll, get, create, update, remove, removeAll };
export default CartDataService;
