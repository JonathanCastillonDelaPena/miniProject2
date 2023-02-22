import serverURI from "./dbServerURI";
const buyerBaseURL = "/buyer";

const getAll = () => {
  return serverURI.get(buyerBaseURL);
};

const get = (id) => {
  return serverURI.get(`${buyerBaseURL}/${id}`);
};

const create = (data) => {
  return serverURI.post(buyerBaseURL, data);
};

const update = (id, data) => {
  return serverURI.put(`${buyerBaseURL}/${id}`, data);
};

const remove = (id) => {
  return serverURI.delete(`${buyerBaseURL}/${id}`);
};

const removeAll = () => {
  return serverURI.delete(buyerBaseURL);
};

const BuyerDataService = { getAll, get, create, update, remove, removeAll };
export default BuyerDataService;
