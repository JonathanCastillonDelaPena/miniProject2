import serverURI from "./dbServerURI";
const couponBaseURL = "/coupon";

const getAll = () => {
  return serverURI.get(couponBaseURL);
};

const get = (id) => {
  return serverURI.get(`${couponBaseURL}/${id}`);
};

const create = (data) => {
  return serverURI.post(couponBaseURL, data);
};

const update = (id, data) => {
  return serverURI.put(`${couponBaseURL}/${id}`, data);
};

const remove = (id) => {
  return serverURI.delete(`${couponBaseURL}/${id}`);
};

const removeAll = () => {
  return serverURI.delete(couponBaseURL);
};

const CouponDataService = { getAll, get, create, update, remove, removeAll };
export default CouponDataService;
