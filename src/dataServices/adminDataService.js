import serverURI from "./dbServerURI";
const adminBaseURL = "/admin";

const getAll = () => {
  return serverURI.get(adminBaseURL);
};

const get = (id) => {
  return serverURI.get(`${adminBaseURL}/${id}`);
};

const create = (data) => {
  return serverURI.post(adminBaseURL, data);
};

const update = (id, data) => {
  return serverURI.put(`${adminBaseURL}/${id}`, data);
};

const remove = (id) => {
  return serverURI.delete(`${adminBaseURL}/${id}`);
};

const removeAll = () => {
  return serverURI.delete(adminBaseURL);
};

const AdminDataService = { getAll, get, create, update, remove, removeAll };
export default AdminDataService;
